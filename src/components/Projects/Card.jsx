import React from 'react'
import styles from "./Card.module.css"

import { getImageUrl } from '../../utils';

export const Card = ({project : {title, imgSrc, description, skills, demo, source}}) => {
  return (
    <div className={styles.container}>
        <img 
            className={styles.img} 
            src={getImageUrl(imgSrc)} 
            alt={`Image of ${title}`} 
        />
        <h3 className={styles.title}>{title}</h3>
        {/* <p className={styles.description}>{description}</p> */}
        <ul className={styles.skills}>
            {skills.map((skill, id) => {
                return (<li key={id} className={styles.skill}>
                        {skill}
                    </li>
                );
            })}
        </ul>
        <div className={styles.links}>
            <a href={demo} target='_blank' className={styles.link}>Demo</a>
            <a href={source} target='_blank' className={styles.link}>Source</a>
        </div>
    </div>  
  );
};