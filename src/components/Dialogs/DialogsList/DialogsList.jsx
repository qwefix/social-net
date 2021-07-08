import React from 'react';
import c from './DialogsList.module.css';
import DialogsItem from './DialogsItem/DialogsItem';

const DialogsList = ({ idList }) => {
    return (
        <div className={c.dialogs_list}>
            <p className={c.header}>Dialogs</p>
            {idList.map((id, i) => <DialogsItem id={id}  key={i} />)}
        </div>
    )
}

export default DialogsList