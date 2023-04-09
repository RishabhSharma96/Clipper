import Head from "next/head";

import Header from "../components/Header";
import LeftHandSide from "../components/LeftHandSide";
import RightHandSide from "../components/RightHandSide";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <div style={{ overflow: "hidden" }}  >
        <Head>
          <title>Clipper</title>
          <meta name="description" content="Clipper - Short video platform" />
          <link
            rel="icon"
            href="https://www.google.com/url?sa=i&url=https%3A%2F%2Ficon-icons.com%2Ficon%2FVideo-Camera%2F117940&psig=AOvVaw2LCdupZAEhQqT4Hcy1xbkf&ust=1680981318477000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKiY08a9mP4CFQAAAAAdAAAAABAk"
          />
        </Head>
        <Header isShow={true} />
        <main>
          <RightHandSide />
          <LeftHandSide />
        </main>
        <Footer />
      </div>
    </>
  );
}
