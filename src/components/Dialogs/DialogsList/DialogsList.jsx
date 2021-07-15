import React from 'react';
import c from './DialogsList.module.css';
import DialogsItem from './DialogsItem/DialogsItem';

const DialogsList = ({ dialogsList }) => {
    return (
        <div className={c.dialogs_list}>
            <p className={c.header}>Dialogs</p>
            {dialogsList.map(({ ava, name, id }, i) => <DialogsItem id={id} ava={ava} name={name} key={i} />)}
        </div>
    )
}

export default DialogsList