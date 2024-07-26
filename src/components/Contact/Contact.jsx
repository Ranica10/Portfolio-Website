import React from 'react'
import { getImageUrl } from '../../utils';

import styles from "./Contact.module.css"

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
                <a href="mailto:ranicachawla@hotmail.com">ranicachawla@hotmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn Icon" />
                <a href="https://linkedin.com/in/ranica-chawla">linkedin.com/ranica-chawla</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub Icon" />
                <a href="https://github.com/Ranica10">github.com/Ranica10</a>
            </li>
        </ul>
    </footer>
  )
};
