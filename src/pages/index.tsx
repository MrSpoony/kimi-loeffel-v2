import { NextPage } from "next/types";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Introduction from "../components/Introduction";
import Projects from "../components/Projects";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main >
        <Introduction />
        <AboutMe />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Home;
