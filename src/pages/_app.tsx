import "../styles/globals.sass";
import "../styles/header.sass";
import "../styles/introduction.sass"
import "../styles/about-me.sass"
import "../styles/projects.sass"
import "../styles/accordeon.sass";
import type { AppType } from "next/app";
import { trpc } from "../utils/trpc";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default trpc.withTRPC(MyApp);
