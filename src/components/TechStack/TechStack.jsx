import { getImageUrl } from '../../utils';
import styles from "./TechStack.module.css";

import skills from "../../data/skills.json";

export const TechStack = () => {
  return (
    <section className={styles.container} id="tech-stack">
      <div className={styles.header}>
        <p className={styles.kicker}>Tech stack</p>
      </div>

      <div className={styles.stackGrid}>
        {skills.map((skill, id) => {
          return (
            <article key={id} className={styles.stackCard}>
              <div className={styles.iconWrap}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};
