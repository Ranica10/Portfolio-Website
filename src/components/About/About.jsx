import React from 'react'
import { getImageUrl } from '../../utils';

import styles from "./About.module.css";

export const About = () => {
  return <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
                    <div className={styles.aboutText}>
                        <h3>Frontend Developer</h3>
                        <p>I'm a front-end developer with experience in building responsive sites with React and HTML.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
                    <div className={styles.aboutText}>
                        <h3>Machine Learning Engineer</h3>
                        <p>I have experience training deep learning models with Python and image classification through OpenCV.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
                    <div className={styles.aboutText}>
                        <h3>UI Designer</h3>
                        <p>I have designed multiple site pages through Figma to create visually appealing user interfaces.</p>
                    </div>
                </li>
            </ul>
        </div>
  </section>;
};
