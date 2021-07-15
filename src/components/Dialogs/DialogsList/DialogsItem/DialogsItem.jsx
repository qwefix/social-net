import React from 'react';
import c from './DialogsItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogsItem = ({ id, name, ava }) => {
    return (
        <NavLink to={`/dialogs/${id}`}>
            <div className={c.item}>
                <div className={c.ava}>
                    <img src={ava} alt="" />
                </div>
                <div className={c.name}>
                    {name}
                </div>
            </div>
        </NavLink>
    )
}

export default DialogsItem
