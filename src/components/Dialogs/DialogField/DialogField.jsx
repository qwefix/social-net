import React from 'react';
import c from './DialogField.module.css';
import Message from './Message/Message';
import NewMessageContainer from './NewMessage/NewMessageContainer';

const DialogField = ({ dialog, targetID }) => {
    return (
        <div className={c.mainWrapper}>
            <div className={c.wrapper}>
                <div className={c.field}>
                    {dialog ? dialog.map((m, i) => <Message {...m} key={i} />) : ''}
                </div>
            </div>
            <NewMessageContainer
                targetID={targetID}
            />
        </div>
    )
}

export default DialogField