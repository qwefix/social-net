import React from 'react';
import c from './Aside.module.css';
import { NavLink } from 'react-router-dom';

const Aside = () => {
    return (
        <aside className={c.aside} >
            <div className={c.list}>
                <NavLink to={`/profile/${window.mySNQId}`} activeClassName={c.active}>Profile</NavLink>
                <NavLink to='/dialogs/1' activeClassName={c.active}>Messages</NavLink>
                <NavLink to='/news' activeClassName={c.active}>News</NavLink>
                <NavLink to='/music' activeClassName={c.active}>Music</NavLink>
                <NavLink to='/settings' activeClassName={c.active}>Settings</NavLink>
            </div>
        </aside>)
}

export default Aside;