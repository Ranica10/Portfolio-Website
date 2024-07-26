import React, {useState} from "react";

import styles from "./Navbar.module.css";
import {getImageUrl} from "../../utils";

export const Navbar = () => {
    /* Close and open menu icon */
    const [menuOpen, setMenuOpen] = useState(false)

    return <nav className={styles.navbar}>
        {/* Return back to home page */}
        <a className = {styles.title} href="/">Portfolio</a>
        <div className = {styles.menu}>
            {/* Navbar menu icon */}
            <img 
                className = {styles.menuBtn} 
                /* change image of menu icon based on state */
                src = {
                    menuOpen 
                    ? getImageUrl("nav/closeIcon.png") 
                    : getImageUrl("nav/menuIcon.png") 
                } 
                alt = "menu-button"
                /* set state to opposite of current */
                onClick={() => setMenuOpen(!menuOpen)}
            />
            {/* List of all menu items */}
            <ul className = {
                    /* Apply this style only when menu open */
                    `${styles.menuItems} 
                    ${menuOpen && styles.menuOpen}`
                }
                /* Close the menu when item clicked */
                onClick = {() => setMenuOpen(false)}
                >
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    </nav>;
};