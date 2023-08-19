import eventData from "../data/events.json";
import { useRouter } from "next/router";
import styles from "../styles/Events.module.css";

export default function Events() {
  const router = useRouter();
  const selectedTag = router.query.tag;
  const relevantEvents = eventData.filter((event) => event.tag === selectedTag);

  console.log(relevantEvents);

  return (
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
  );
}
