import { NextPage } from "next/types";
import AboutMe from "../components/AboutMe";
import Header from "../components/Header";
import Introduction from "../components/Introduction";
import Projects from "../components/Projects";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main>
        <Introduction />
        <AboutMe />
        <Projects />
      </main>
    </>
  );
};

export default Home;
