import React from 'react'

import { getImageUrl } from '../../utils';
import styles from "./Experience.module.css";

import skills from "../../data/skills.json";
import history from "../../data/history.json";


export const Experience = () => {
  return <section className={styles.container} id="experience">
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.content}>
            <div className={styles.skills}>{
                /* Loop through array of skills and display img + title */
                skills.map((skill, id) => {
                    return <div key={id} className={styles.skill}>
                        <div className={styles.skillImgContainer}>
                            <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                        </div>
                        <p>{skill.title}</p>
                    </div>
                })
            }</div>
            <ul className={styles.history}>
                {/* Loop through array of experiences and display img + title */}
                {
                    history.map((item, id) => {
                        return <li key={id} className={styles.historyItem}>
                            <img src={getImageUrl(item.imageSrc)} alt={`${item.org} Logo`} />
                            <div className={styles.historyItemDetails}>
                                <h3>{`${item.role}, ${item.org}`}</h3>
                                <p>{`${item.start} - ${item.end}`}</p>
                                {/* Loop through array of descriptions and display each */}
                                <ul>
                                    {
                                        item.description.map((bullet, id) => {
                                            return <li key={id}>
                                                {bullet}
                                            </li>
                                        })
                                    }
                                </ul>
                            </div>
                        </li>
                    })
                }
            </ul>
        </div>
  </section>;
};