import eventData from "../data/events.json";
import { useRouter } from "next/router";
import styles from "../styles/common.module.css";
import Footer from "./footer";
import Header from "./header";

export default function Events() {
  const router = useRouter();
  const selectedTag = router.query.tag;
  const relevantEvents = eventData.filter((event) => event.tag === selectedTag);

  return (
    <div className={styles.container}>
      <Header pageTitle={selectedTag}/>
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
      <Footer/>
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
          background-color: #000000;
        }
      `}</style>
    </div>
  );
}
