import eventData from "../data/events.json";
import considerations from "../data/considerations.json";
import { useRouter } from "next/router";
import styles from "../styles/common.module.css";
import Footer from "./footer";
import Header from "./header";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Events() {
  // Add all the solid style icons to the library
  library.add(fas);
  const router = useRouter();
  const selectedTag = router.query.tag;
  const relevantEvents = eventData.filter((event) => event.tag === selectedTag);
  console.log(considerations);
  return (
    <div className={styles.container}>
      <Header pageTitle={selectedTag} />
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
                {considerations.map((c, i) => (
                  <FontAwesomeIcon key={i} icon={c.icon} />
                ))}
                <br />
              </p>
            </a>
          ))}
        </div>
      </main>
      <Footer />
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
