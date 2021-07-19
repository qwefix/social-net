import React from 'react';
import c from './DialogField.module.css';
import Message from './Message/Message';
import NewMessage from './NewMessage/NewMessage';

const DialogField = ({ dialog, myID }) => {
    return (
        <div className={c.field}>
            {dialog ? dialog.map((m, i) => <Message message={m} key={i} myID={myID} />) : ''}
            <NewMessage/>
        </div>
    )
}

export default DialogField