import SpotifyWebApi from "spotify-web-api-node";
import type { NextApiRequest, NextApiResponse } from "next";

const spotifyApi = new SpotifyWebApi({
  accessToken: process.env.SPOTIFY_ACCESS_TOKEN,
  refreshToken: process.env.SPOTIFY_REFRESH_TOKEN,
  clientId: process.env.SPOTIFY_ID,
  clientSecret: process.env.SPOTIFY_SECRET,
});

(async () => {
  const x = await spotifyApi.refreshAccessToken();
  console.log(x.body)
})()

export default async function spotify(_: NextApiRequest, res: NextApiResponse) {
  spotifyApi.getMyCurrentPlayingTrack().then(data => {
    res.status(200).json({
      is_playing: data.body.is_playing,
      song: data.body.item?.name,
      album: (data.body.item as SpotifyApi.TrackObjectFull).album?.name,
      artists: (data.body.item as SpotifyApi.TrackObjectFull).album.artists.map(a => a?.name),
      image: (data.body.item as SpotifyApi.TrackObjectFull).album.images?.[0]?.url,
    })
  }, err => {
    console.error(err)
   res.status(500).json({message: "Could not load the song"})
  })
}