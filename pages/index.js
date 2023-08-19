import Head from "next/head";
import styles from "../styles/common.module.css";
import eventData from "../data/events.json";
import Link from 'next/link';
import Footer from "./footer";

export default function Home() {
  const uniqueTags = [...new Set(eventData.map((event) => event.tag))];

  return (
    <div className={styles.container}>
      <Head>
        <title>Disability WA</title>
        <link
          rel="icon"
          href="https://rgcopcorpweb920-cdn-endpoint.azureedge.net/-/media/Themes/COP/COP/COP/COP/images/favicon-32x32.png?rev=102aca72165940d3a63748a04d47c74c&modified=20180716022216"
        />
      </Head>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          color: white;
        }
        * {
          box-sizing: border-box;
          background-color: black;
        }
      `}</style>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to <strong className={styles.strong}>your</strong> next adventure!</h1>
        <p className={styles.description}>
          What would you like to do this weekend?
        </p>

        <div className={styles.grid}>
          {uniqueTags.map((tag, index) => (
            <Link
              key={index}
              href={{pathname:'/events',
              query: { tag: tag } }}
              as={`/events?tag=${encodeURIComponent(tag)}`} 
              className={styles.card}
            >
              <h3>{tag} &rarr;</h3>
            </Link>
          ))}
        </div>
      </main>
      <Footer/>
    </div>
  );
}
