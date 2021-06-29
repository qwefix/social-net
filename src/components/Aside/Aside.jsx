import React from 'react';
import c from './Aside.module.css';

const Aside = () => {
    return (
        <aside  className = {c.aside} >
            <ul className={c.list}>
                <li>Profile</li>
                <li>Messages</li>
                <li>News</li>
                <li>Music</li>
                <li>Settings</li>
            </ul>
        </aside>)
}

export default Aside;