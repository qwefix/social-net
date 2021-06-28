import React from 'react';
import styles from './styles/Aside.module.css';

const Aside = () => {
    return (
        <aside  className = {styles.aside} >
            <ul className={styles.list}>
                <li>Profile</li>
                <li>Messages</li>
                <li>News</li>
                <li>Music</li>
                <li>Settings</li>
            </ul>
        </aside>)
}

export default Aside;