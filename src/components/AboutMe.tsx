import Accordeon from "./Accordeon";
import { useEffect, useState } from "react";

const notListeningText = "I'm currently not listenting to something on spotify";

export default function AboutMe() {
  const [isListening, setIsListening] = useState(false);
  const [song, setSong] = useState("");
  const [album, setAlbum] = useState("");
  const [artists, setArtists] = useState([""]);
  const [image, setImage] = useState("");

  useEffect(() => {
    fetch("/api/spotify")
      .then((body) => body.json())
      .then((data) => {
        if (!data.is_playing) return;
        setIsListening(true);
        setSong(data.song);
        setAlbum(data.album);
        setArtists(data.artists);
        setImage(data.image);
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
        Hi, I&apos;m Kimi Loeffel and I really enjoy programming and everything
        that is realated with it. I also like cubing, athletics and playing the
        guitar.
      </p>
      <h3>Topics</h3>
      <Accordeon title="Cube" image="/topics/rubiks-cube.png">
        I solved my first Rubik&apos;s cube when I was around 7 year old. Back
        then I solved the cube with the simplest method that exists. I also did
        not know that there exists a whole community around cubing. I also did
        some (around 20) solves which I timed. I remember that my best solve was
        1 minute and 26 seconds. In November of 2020 I found my cube again and
        watched some videos on how to solve it faster. Afetr I bought myself a
        faster cube I started with speedcubing. I already went to some
        competitions and my official fastest time to solve a Rubik&apos;s cube
        is 12.11 seconds.
      </Accordeon>
      <Accordeon title="Coding" image="/topics/coding.jpeg">
        I started coding when I was 11 year old. I started with Scratch. Later
        on I made some Apps with the MIT App Inventor. I also made some simple
        static websites with HTML, CSS and JS. After some more experience I
        discovered Python. I mostly followed tutorials and did&apos;t do
        projects on my own. In 9th grade I had a weekly workplace at Gimmeli
        Engineering AG. There I worked with the Panda Robot. In the first months
        I learned about how it works and how it works together with a 2D and a
        3D camera. As a final project I made the robot solve a Rubik&apos;s
        cube. In 2021 and 2022 I was in my first year of the apprenticeship in
        the so called basic training for my further job as a computer scientist.
        In this year I was able to learn about many things. We took a look at
        all the important prgoramming concepts and all the kinds of programming.
        We learned about databases, backend, frontend, mobile development, some
        telematics, operating systems, project management and much more. I am
        currently taking my apprenticeship at the FOITT as a computer scientist.
      </Accordeon>
      <Accordeon title="Sports" image="/topics/sports.png">
        I joined the gymnastics club Zollikofen in 2012. In my first few year I
        was in the &quot;Jugi&quot;. After a few years I switched to the
        athletics training in which I train today. I went to many competitions
        and also won some of them.
      </Accordeon>

      <h3>Skills</h3>
      <Accordeon title="Neovim" image="/topics/neovim.png" progress={0.9}>
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
      </Accordeon>
      <Accordeon
        title="Competitive Programming"
        image="/topics/soi.png"
        progress={0.5}
      >
        I first came in contact with CP in 2021. Lionel Mueller participated in
        the Swiss Olympiad in informatics and he asked me if I would like to
        participate too. And after I bearly made it into the SOI-Camp I really
        started liking CP. I learned about many new concepts and some of them I
        even was able to use in productive code. But there is still much to
        learn for me. I only scratched the surface in my first year. I hope I
        can improve my skills in CP this and the following years.
      </Accordeon>

      <h3>Nice to know</h3>
      <Accordeon
        title="Spotify status"
        image={image || "/spotify/placeholder.png"}
      >
        {!isListening
          ? notListeningText
          : `I'm currently listening to the song '${song || "Loading..."
          }' from the album '${album || "Loading..."}' from the artist${artists.length > 1 ? "s" : ""
          } ${artists.join(", ") || "Loading"}`}
      </Accordeon>
    </section>
  );
}
