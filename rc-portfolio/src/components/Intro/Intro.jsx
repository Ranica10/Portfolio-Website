import React from "react";
import { getImageUrl } from "../../utils";

import styles from "./Intro.module.css";

export const Intro = () => {
    return <section className={styles.container}>
        {/* Introduction to my profile */}
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Ranica Chawla</h1>
            <p className={styles.description}>I'm a full-stack developer with 4 years of experience working with machine learning models. Reach out if you'd like to learn more!</p>
            <a className={styles.contactBtn} href="mailto:ranicachawla@hotmail.com">Contact Me</a>
        </div>
        <img className={styles.profileImg} src={getImageUrl("intro/profileImage.png")} alt="Profile Image of me"/>
        
        {/* Background style */}
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    
    </section>;
};