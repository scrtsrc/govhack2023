import Head from "next/head";
import styles from "../styles/common.module.css";
import eventData from "../data/events.json";
import Link from 'next/link';

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
      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
      `}</style>

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
      <main>
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

      <footer>
        <a
          href="https://perth.wa.gov.au/en"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img
            src="https://rgcopcorpweb920-cdn-endpoint.azureedge.net/-/media/Project/COP/COP/COP/Assets/Logos/City-of-Perth-Logos/COP_Brandmark_Tagline_Primary_Colour_Black.png?h=904&w=3547&rev=1c25717c54664788bd921d09d393e988&modified=20221111053706&hash=4FAB4CB4BCDE7CB401B0D54CB77158E4"
            alt="City of Perth Logo"
            className={styles.logo}
          />
        </a>
      </footer>

     
    </div>
  );
}
