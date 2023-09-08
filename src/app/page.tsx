import Head from "next/head";
import ThreeScene from "../components/Three";
import Light from "../components/Light";

function Home() {
  return (
    <div>
      <Head>
        <title>Three.js in Next.js</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main>
        <h1>My Three.js Scene</h1>
        <Light />
        <ThreeScene />
      </main>

      <footer>Footer content</footer>
    </div>
  );
}

export default Home;
