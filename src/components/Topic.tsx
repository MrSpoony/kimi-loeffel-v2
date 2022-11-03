import { ReactNode } from "react";
import Accordeon from "./Accordeon";

export default function Topic({
  title,
  image,
  children,
}: {
  title: string;
  image: string;
  children: ReactNode;
}) {
  return <Accordeon title={title} image={image}>{children}</Accordeon>;
}
