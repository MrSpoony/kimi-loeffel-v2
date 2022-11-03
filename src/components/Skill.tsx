import { ReactNode } from "react";
import Accordeon from "./Accordeon";

export default function Skill({
  title,
  image,
  skillLevel,
  children,
}: {
  title: string;
  image: string;
  skillLevel: number;
  children: ReactNode;
}) {
  return <Accordeon title={title} image={image} progress={skillLevel}>{children}</Accordeon>;
}
