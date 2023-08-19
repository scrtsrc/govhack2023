import eventData from "../data/events.json";
import { useRouter } from "next/router";
import styles from "../styles/common.module.css";

export default function Events() {
  const router = useRouter();
  const selectedTag = router.query.tag;
  const relevantEvents = eventData.filter((event) => event.tag === selectedTag);

  return (
    <>
      <header>
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
      </header>
      <main className={styles.main}>
        <div className={styles.grid}>
          {relevantEvents.map((e, index) => (
            <a
              key={index}
              href={`https://perthisok.com/${e.href}`}
              className={styles.card}
            >
              <h3 key={index}>{e.title} &rarr;</h3>
              <p>
                Date: {e.date}
                <br />
                Location: {e.location}
                <br />
              </p>
            </a>
          ))}
        </div>
      </main>
      <style jsx>{`
        header {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        header img {
          margin-left: 0.5rem;
        }
        header a {
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
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}
