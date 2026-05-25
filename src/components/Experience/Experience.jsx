import { getImageUrl } from '../../utils';
import styles from "./Experience.module.css";

import history from "../../data/history.json";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <div className={styles.header}>
        <p className={styles.kicker}>Experience</p>
      </div>

      <div className={styles.timeline}>
        {history.map((item, id) => {
          return (
            <article key={id} className={styles.timelineItem}>
              <div className={styles.timelineMarker}>
                <span>{String(id + 1).padStart(2, "0")}</span>
              </div>

              <div className={styles.timelineCard}>
                <div className={styles.cardTop}>
                  <img src={getImageUrl(item.imageSrc)} alt={`${item.org} Logo`} />
                  <div>
                    <p className={styles.date}>{`${item.start} - ${item.end}`}</p>
                    <h3>{item.role}</h3>
                    <p className={styles.org}>{item.org}</p>
                  </div>
                </div>

                <ul className={styles.description}>
                  {item.description.map((bullet, id) => {
                    return <li key={id}>{bullet}</li>;
                  })}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
