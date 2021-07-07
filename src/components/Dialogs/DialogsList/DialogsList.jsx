import React from 'react';
import c from './DialogsList.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import { NavLink } from 'react-router-dom';

const DialogsList = (props) => {
    return (
        <div className={c.dialogs_list}>
            <p className={c.header}>Dialogs</p>
            {props.users.map((element, i) => {
                return (
                    <NavLink to={`/dialogs/${element.path}`} key={i}>
                        <DialogsItem name={element.name} path={element.path}/>
                    </NavLink>
                )
            })}
        </div>
    )
}

export default DialogsList