import Accordeon from "./Accordeon";
import type {
  SpotifyResponse,
  SpotifyIsPlayingResponse,
} from "../pages/api/spotify";
import { useEffect, useState } from "react";
import {
  faCube,
  faCode,
  faPersonRunning,
} from "@fortawesome/free-solid-svg-icons";

export default function AboutMe() {
  const [data, setData] = useState(null as SpotifyIsPlayingResponse | null);

  useEffect(() => {
    fetch("/api/spotify")
      .then((body) => body.json())
      .then((resp: SpotifyResponse) => {
        if (!resp.is_playing) return;
        setData(resp);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <section id="about-me">
      <h2>About me</h2>

      <h3>Introduction</h3>

      <p>
        {`
        Hi, I'm Kimi Loeffel and I really enjoy programming and everything
        that is realated with it. I also like cubing, athletics and playing the
        guitar.
        `}
      </p>

      <h3>Topics</h3>

      <Accordeon title="Sports" icon={faPersonRunning}>
        {`
        I joined the gymnastics club Zollikofen in 2012. In my first few years I was in a polysportive group.
        After a few years I switched to the athletics training in which I still train today.
        I went to many competitions and also won some of them.
        `}

        <br />
        <br />

        <b>{`My current PR's`}</b>

        <table>
          <tr>
            <td>Long jump</td>
            <td>5.71m</td>
          </tr>
          <tr>
            <td>Shot put (5kg)</td>
            <td>9.22m</td>
          </tr>
          <tr>
            <td>100m</td>
            <td>12.22</td>
          </tr>
          <tr>
            <td>High jump</td>
            <td>1.55m</td>
          </tr>
          <tr>
            <td>800m</td>
            <td>2:18.06</td>
          </tr>
        </table>
      </Accordeon>

      <Accordeon title="Running" icon={faPersonRunning}>
        {`
        I competed in my first runs when I was 2 years old (1min 27 for 200m).
        But I really started my journey in early 2023 when I picked up running
        and went running more often. Right now I run about 4-5 times a week.
        `}
        <br />
        <br />

        <b>{`My current PR's`}</b>

        <table>
          <tr>
            <td>5k</td>
            <td>18:31</td>
          </tr>
          <tr>
            <td>10k</td>
            <td>39:41</td>
          </tr>
          <tr>
            <td>Half-Marathon</td>
            <td>1:29:54</td>
          </tr>
          <tr>
            <td>Marathon</td>
            <td>coming soon</td>
          </tr>
        </table>
      </Accordeon>

      <h3>Skills</h3>

      <Accordeon title="Coding" icon={faCode}>
        {`
        I started coding when I was 11 year old. I started with Scratch. Later
        on I made some Apps with the MIT App Inventor. I also made some simple
        static websites with HTML, CSS and JS. After some more experience I
        discovered Python. I mostly followed tutorials and did't do
        projects on my own. In 9th grade I had a weekly workplace at Gimmeli
        Engineering AG. There I worked with the Panda Robot. As a final project I made the robot solve a Rubik's
        cube. In 2021 and 2022 I was in my first year of the apprenticeship in
        the basic training for my further job as a computer scientist.
        In this year I was able to learn about many things. We took a look at
        all the important prgoramming concepts and all the kinds of programming.
        We learned about databases, backend, frontend, mobile development, some
        telematics, operating systems, IoT, project management and much more. I am
        currently taking my apprenticeship at the FOITT as a computer scientist.
        `}
      </Accordeon>

      <Accordeon title="Neovim" image="/topics/neovim.png">
        {`
        I started using Vim Movements in 2021. I started with the Vim emulations
        in my favourite Editors then. But only some short time later I switched
        to Arch Linux which made me love my own configurations of things.
        Including my Neovim config. I started playing around with some plugins
        and recognized the big community around Neovim. I also saw that Neovim
        is much more than a simple text editor. You can make Neovim do
        everything you want because behind it is a turing complete language you
        can use to configure your personal development environment. I configured
        Neovim and now I use it for almost everything related to coding or
        writing text.
        `}
      </Accordeon>

      <Accordeon title="Competitive Programming" image="/topics/soi.png">
        {`
        I first came in contact with CP in 2021. Lionel Mueller participated in
        the Swiss Olympiad in informatics and he asked me if I would like to
        participate too. And after I bearly made it into the SOI-Camp I really
        started liking CP. I learned about many new concepts and some of them I
        even was able to use in productive code. But there is still much to
        learn for me. I only scratched the surface in my first year. I hope I
        can improve my skills in CP this and the following years.
        `}
      </Accordeon>

      <Accordeon title="Cube" icon={faCube}>
        {`
        I solved my first Rubik's cube when I was around 7 year old. Back
        then I solved the cube with the simplest method that exists. I also did
        not know that there exists a whole community around cubing. I also did
        some (around 20) solves which I timed. I remember that my best solve was
        1 minute and 26 seconds. In November of 2020 I found my cube again and
        watched some videos on how to solve it faster. Afetr I bought myself a
        faster cube I started with speedcubing. I already went to some
        competitions and my official fastest time to solve a Rubik's cube
        is 12.11 seconds.
        `}
      </Accordeon>

      <h3>Nice to know</h3>

      <Accordeon
        title="Spotify status"
        image={data?.image || "/spotify/placeholder.png"}
      >
        {data == null
          ? "I'm currently not listenting to something on spotify"
          : data.type == "song"
          ? `I'm currently listening to the song '${
              data.song
            }' from the album '${data.album}' from the artist${
              data.artists.length > 1 ? "s" : ""
            } ${data.artists.join(", ")}`
          : `I'm currently listening to the episode '${data.episode}' from the podcast '${data.show}' from ${data.artists}`}
      </Accordeon>
    </section>
  );
}
