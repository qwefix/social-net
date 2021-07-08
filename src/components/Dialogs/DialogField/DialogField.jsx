import React from 'react';
import c from './DialogField.module.css';
import Message from './Message/Message';

const DialogField = ({dialog}) => {
    return (
        <div className={c.field}>
            {dialog.map((m,i)=><Message message={m} key={i} />)}
        </div>
    )
}

export default DialogField