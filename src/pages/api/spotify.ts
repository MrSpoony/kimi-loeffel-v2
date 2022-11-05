import SpotifyWebApi from "spotify-web-api-node";
import type { NextApiRequest, NextApiResponse } from "next";

const spotifyApi = new SpotifyWebApi({
  accessToken: process.env.SPOTIFY_ACCESS_TOKEN,
  refreshToken: process.env.SPOTIFY_REFRESH_TOKEN,
  clientId: process.env.SPOTIFY_ID,
  clientSecret: process.env.SPOTIFY_SECRET,
});

async function refreshToken() {
  const x = await spotifyApi.refreshAccessToken();
  spotifyApi.setAccessToken(x.body.access_token);
  spotifyApi.setRefreshToken(x.body.refresh_token || process.env.SPOTIFY_REFRESH_TOKEN || "");
}

export default async function spotify(_: NextApiRequest, res: NextApiResponse) {
  await refreshToken();

  let data;
  try {
    data = await spotifyApi.getMyCurrentPlayingTrack()
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Could not load the song" })
  }
  const is_playing = data.body.is_playing && data.body.item !== null;
  if (!is_playing) return res.status(200).json({ is_playing: false });
  const song = data.body.item?.name;
  const episode = (data.body.item as SpotifyApi.EpisodeObject)
  const track = (data.body.item as SpotifyApi.TrackObjectFull)
  const album: string = track?.album?.name || episode?.show?.name;
  const artists: string[] = track?.album.artists.map(a => a?.name) || [episode?.show?.publisher];
  const image: string = track?.album.images?.[0]?.url || episode?.images?.[0]?.url || "";
  const info = { is_playing, song, album, artists, image };
  return res.status(200).json(info)
}
