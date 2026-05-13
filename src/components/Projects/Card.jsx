/* eslint-disable react/prop-types */
import styles from "./Card.module.css"

import { getImageUrl } from '../../utils';

export const Card = ({project : {title, imgSrc, description, skills, demo, source}}) => {
  return (
    <article className={styles.container}>
        <div className={styles.imageWrap}>
            <img className={styles.img} src={getImageUrl(imgSrc)} alt={`Image of ${title}`} />
        </div>
        <div className={styles.body}>
            <p className={styles.label}>Featured Project</p>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>
                {skills.map((skill, id) => {
                    return (<li key={id} className={styles.skill}>{skill}</li>);
                })}
            </ul>
            <div className={styles.links}>
                <a href={demo} target='_blank' rel='noreferrer' className={styles.link}>Live Demo</a>
                <a href={source} target='_blank' rel='noreferrer' className={styles.linkSecondary}>Source</a>
            </div>
        </div>
    </article>  
  );
};
