import React from 'react';
import c from './DialogsList.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import { NavLink } from 'react-router-dom';

const DialogsList = ({idList}) => {
    return (
        <div className={c.dialogs_list}>
            <p className={c.header}>Dialogs</p>
            {idList.map((a, i) => {
                return (
                    <NavLink to={`/dialogs/${a}`} key={i}>
                        <DialogsItem id={a}/>
                    </NavLink>
                )
            })}
        </div>
    )
}

export default DialogsList