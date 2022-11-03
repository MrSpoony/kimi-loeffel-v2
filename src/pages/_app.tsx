import "../styles/globals.sass";
import "../styles/header.sass";
import "../styles/footer.sass";
import "../styles/introduction.sass"
import "../styles/about-me.sass"
import "../styles/projects.sass"
import "../styles/contact.sass";
import "../styles/accordeon.sass";
import type { AppProps as NextAppProps } from "next/app";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AppProps<P = any> = {
  pageProps: P;
} & Omit<NextAppProps<P>, "pageProps">;


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
