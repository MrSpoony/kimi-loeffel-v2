import Skill from "./Skill";
import Topic from "./Topic";
import { useEffect, useState } from "react";

const notListeningText = "I'm currently not listenting to something on spotify";

export default function AboutMe() {
  const [isListening, setIsListening] = useState(false);
  const [song, setSong] = useState("");
  const [album, setAlbum] = useState("");
  const [artists, setArtists] = useState([""])
  const [image, setImage] = useState("");

  useEffect(() => {
    fetch("/api/spotify")
      .then(body => body.json())
      .then(data => {
        if (!data.is_playing) return;
        setIsListening(true);
        setSong(data.song);
        setAlbum(data.album);
        setArtists(data.artists);
        setImage(data.image);
      })
      .catch(err => {
        console.error(err);
      })
  }, []);

  return (
    <section id="about-me">
      <h2>About me</h2>
      <h3>Introduction</h3>
      <p>
        Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
        enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
        exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit
        nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor
        minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure
        elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor
        Lorem duis laboris cupidatat officia voluptate. Culpa proident
        adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod.
        Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
        Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa
        et culpa duis.
      </p>
      <h3>Topics</h3>
      {Array.from(Array(2)).map((_, i) => (
        <Topic
          key={i}
          title="Cube"
          image="/topics/rubiks-cube.png"
          text="Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis."
        />
      ))}
      <h3>Skills</h3>
      {Array.from(Array(2)).map((_, i) => (
        <Skill
          key={i}
          title="Cube"
          image="/topics/rubiks-cube.png"
          text="Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis."
          skillLevel={Math.random()}
        />
      ))}
      <h3>Nice to know</h3>
      <Topic
        title="Spotify status"
        image={image || "/spotify/placeholder.png"}
        text={!isListening ? notListeningText : `I'm currently listening to the song '${song || "Loading..."}' from the album '${album || "Loading..."}' from the artist${artists.length > 1 ? "s" : ""} ${artists.join(", ") || "Loading"}`}
      />
    </section>
  );
}
