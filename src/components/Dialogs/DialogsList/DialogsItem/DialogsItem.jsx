import React from 'react';
import c from './DialogsItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogsItem = ({ id }) => {
    return (
        <NavLink to={`/dialogs/${id}`}>
            <div className={c.item}>
                <div className={c.ava}>
                    <img src={require(`../../../../UsersJSON/${id}/ava.jpg`).default} alt="" />
                </div>
                <div className={c.name}>
                    {require(`../../../../UsersJSON/${id}/info.json`).name}
                </div>
            </div>
        </NavLink>
    )
}

export default DialogsItem
