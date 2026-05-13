import { getImageUrl } from "../../utils";

import styles from "./Intro.module.css";

export const Intro = () => {
    return <section className={styles.container} id="home">
        <div className={styles.content}>
            <p className={styles.eyebrow}>Software Developer · AI/ML · Embedded Systems</p>
            <h1 className={styles.title}>Hi, I&apos;m Ranica Chawla</h1>
            <p className={styles.description}>I'm a full-stack developer with 4 years of experience working with full-stack development and systems-level projects. Reach out if you'd like to learn more!</p>
            <div className={styles.actions}>
                <a className={styles.contactBtn} href="mailto:ranicachawla@hotmail.com">Contact Me</a>
                <a className={styles.secondaryBtn} href="#projects">View Projects</a>
            </div>
            <div className={styles.highlights}>
                <div><span>4+</span><p>Years building</p></div>
                <div><span>10+</span><p>Tech skills</p></div>
                <div><span>3</span><p>Experience areas</p></div>
            </div>
        </div>
        <div className={styles.visualWrap}>
            <img className={styles.profileImg} src={getImageUrl("intro/profileImage.png")} alt="Profile Picture of Ranica Chawla"/>
            <div className={styles.statusCard}>Open to software roles</div>
        </div>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>;
};
