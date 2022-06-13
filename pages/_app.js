import "../styles/globals.css";
import Container from "../containers/ContainerNavbar/Container";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon-32x32.png" type="image/x-icon" />
        <title>Blog</title>
      </Head>
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  );
}

export default MyApp;
