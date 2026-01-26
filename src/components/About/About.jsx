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
                        <p>I'm a front-end developer with experience in building responsive sites with Vue, React, and HTML.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
                    <div className={styles.aboutText}>
                        <h3>Software & AI Projects</h3>
                        <p>I have experience with machine learning projects in Python and C++, including a credit card approval system using logistic regression and a camera-based attendance system using OpenCV.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
                    <div className={styles.aboutText}>
                        <h3>Object-Oriented Development</h3>
                        <p>I have experience building Java applications using object-oriented programming concepts such as encapsulation, inheritance, and modular design.</p>
                    </div>
                </li>
            </ul>
        </div>
  </section>;
};
