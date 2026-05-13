import { getImageUrl } from '../../utils';

import styles from "./About.module.css";

export const About = () => {
  return <section className={styles.container} id="about">
        <div className={styles.header}>
            <p className={styles.kicker}>About me</p>
        </div>
        <div className={styles.content}>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
                    <div className={styles.aboutText}>
                        <h3>Frontend Development</h3>
                        <p>Building responsive, accessible interfaces with Vue, React, HTML, and CSS.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
                    <div className={styles.aboutText}>
                        <h3>Software & AI Projects</h3>
                        <p>Developing machine learning projects in Python and C++, including logistic regression and OpenCV-based systems.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
                    <div className={styles.aboutText}>
                        <h3>Object-Oriented Development</h3>
                        <p>Creating Java applications with encapsulation, inheritance, modularity, and maintainable design.</p>
                    </div>
                </li>
            </ul>
        </div>
  </section>;
};
