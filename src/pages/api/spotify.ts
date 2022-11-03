import SpotifyWebApi from "spotify-web-api-node";
import type { NextApiRequest, NextApiResponse } from "next";

const spotifyApi = new SpotifyWebApi({
  accessToken: process.env.SPOTIFY_ACCESS_TOKEN,
  refreshToken: process.env.SPOTIFY_REFRESH_TOKEN,
  clientId: process.env.SPOTIFY_ID,
  clientSecret: process.env.SPOTIFY_SECRET,
});

export default async function spotify(_: NextApiRequest, res: NextApiResponse) {
  const x = await spotifyApi.refreshAccessToken();
  spotifyApi.setAccessToken(x.body.access_token);
  spotifyApi.setRefreshToken(x.body.refresh_token || process.env.SPOTIFY_REFRESH_TOKEN || "");
  spotifyApi.getMyCurrentPlayingTrack().then(data => {
    const is_playing = data.body.is_playing;
    if (!is_playing) return res.status(200).json({ is_playing });
    const song = data.body.item?.name;
    const album = (data.body.item as SpotifyApi.TrackObjectFull).album?.name;
    const artists = (data.body.item as SpotifyApi.TrackObjectFull).album.artists.map(a => a?.name);
    const image = (data.body.item as SpotifyApi.TrackObjectFull).album.images?.[0]?.url;
    const info = { is_playing, song, album, artists, image };
    return res.status(200).json(info)
  }, err => {
    console.error(err)
    return res.status(500).json({ message: "Could not load the song" })
  })
}
