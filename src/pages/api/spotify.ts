import SpotifyWebApi from "spotify-web-api-node";
import type { NextApiRequest, NextApiResponse } from "next";

export type SpotifyIsPlayingResponse = {
  is_playing: true;
} & (
  | {
      type: "song";
      song: string;
      album: string;
      artists: string[];
      image: string;
    }
  | {
      type: "podcast";
      episode: string;
      show: string;
      artists: string;
      image: string;
    }
);

export type SpotifyResponse =
  | SpotifyIsPlayingResponse
  | {
      is_playing: false;
    };

const spotifyApi = new SpotifyWebApi({
  accessToken: process.env.SPOTIFY_ACCESS_TOKEN,
  refreshToken: process.env.SPOTIFY_REFRESH_TOKEN,
  clientId: process.env.SPOTIFY_ID,
  clientSecret: process.env.SPOTIFY_SECRET,
});

async function refreshToken() {
  const x = await spotifyApi.refreshAccessToken();
  spotifyApi.setAccessToken(x.body.access_token);
  spotifyApi.setRefreshToken(
    x.body.refresh_token || process.env.SPOTIFY_REFRESH_TOKEN || ""
  );
}

export default async function spotify(_: NextApiRequest, res: NextApiResponse) {
  await refreshToken();

  let data;
  try {
    data = await spotifyApi.getMyCurrentPlayingTrack({
      additional_types: "episode",
    } as any);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Could not load the song" });
  }
  const is_playing = data.body.is_playing && data.body.item !== null;
  if (!is_playing) return res.status(200).json({ is_playing: false });
  const isTrack = data.body.currently_playing_type == "track";
  const episode = data.body.item as SpotifyApi.EpisodeObject;
  const track = data.body.item as SpotifyApi.TrackObjectFull;
  const info: SpotifyResponse = isTrack
    ? {
        is_playing,
        type: "song",
        song: track?.name,
        album: track?.album?.name,
        artists: track?.album.artists.map((a) => a?.name),
        image: track?.album.images?.[0]?.url || "",
      }
    : {
        is_playing: true,
        type: "podcast",
        episode: episode.name,
        show: episode.show.name,
        artists: episode?.show?.publisher,
        image: episode?.images?.[0]?.url || "",
      };
  return res.status(200).json(info);
}
