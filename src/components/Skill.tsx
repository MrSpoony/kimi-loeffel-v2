import Accordeon from "./Accordeon";

export default function Skill({
  title,
  image,
  text,
  skillLevel,
}: {
  title: string;
  image: string;
  text: string;
  skillLevel: number;
}) {
  return <Accordeon title={title} image={image} text={text} progress={skillLevel} />;
}
