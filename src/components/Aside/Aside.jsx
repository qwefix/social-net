import React from 'react';
import c from './Aside.module.css';

const Aside = () => {
    return (
        <aside  className = {c.aside} >
            <ul className={c.list}>
                <li><a href='/profile'>Profile</a></li>
                <li><a href='/dialogs'>Messages</a></li>
                <li><a href='/news'>News</a></li>
                <li><a href='/music'>Music</a></li>
                <li><a href='/settings'>Settings</a></li>
            </ul>
        </aside>)
}

export default Aside;