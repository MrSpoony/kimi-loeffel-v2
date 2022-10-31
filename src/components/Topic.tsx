import Accordeon from "./Accordeon";

export default function Topic({
  title,
  image,
  text,
}: {
  title: string;
  image: string;
  text: string;
}) {
  return <Accordeon title={title} image={image} text={text} />;
}
