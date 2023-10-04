import Head from "next/head";
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
      <Head>
        <title>Kimi Loeffel</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <main>
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
