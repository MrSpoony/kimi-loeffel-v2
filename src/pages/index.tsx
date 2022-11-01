import { NextPage } from "next/types";
import AboutMe from "../components/AboutMe";
import Header from "../components/Header";
import Introduction from "../components/Introduction";
import Projects from "../components/Projects";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main
        onMouseMove={(e) => {
          const cards = document.querySelectorAll(".project");
          for (const [, card] of Object.entries(cards)) {
            const rect = card.getBoundingClientRect(),
              x = e.clientX - rect.left,
              y = e.clientY - rect.top;
            (card as any).style.setProperty("--mouse-x", `${x}px`);
            (card as any).style.setProperty("--mouse-y", `${y}px`);
          }
        }}
      >
        <Introduction />
        <AboutMe />
        <Projects />
      </main>
    </>
  );
};

export default Home;
