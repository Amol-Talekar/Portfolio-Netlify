import React from 'react'
import {NavHashLink } from 'react-router-hash-link';
import styles from "./Navbar.module.css"

const Navbar = () => {
    return (
        <div>
            <div className={styles.navbarGrid}>
                <NavHashLink className={styles.navlinkClass} to="/" >Home</NavHashLink>
                <NavHashLink className={styles.navlinkClass} smooth to="/#about" >About Me</NavHashLink>
                <NavHashLink className={styles.navlinkClass} smooth to="/#tech" >Tech</NavHashLink>
                <NavHashLink className={styles.navlinkClass} smooth to="/#projects" >Projects</NavHashLink>
                <NavHashLink className={styles.navlinkClass} smooth to="/#contact" >Contact Me!</NavHashLink>
                
            </div>
            
        </div>
    )
}

export {Navbar}
