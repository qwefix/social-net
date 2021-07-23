import React from 'react';
import c from './DialogField.module.css';
import Message from './Message/Message';
import NewMessage from './NewMessage/NewMessage';

const DialogField = ({ dialog, targetID, myID, newMessageMethods, newMessageValue }) => {
    return (
        <div className={c.mainWrapper}>
            <div className={c.wrapper}>
                <div className={c.field}>
                    {dialog ? dialog.map((m, i) => <Message message={m} key={i} myID={myID} />) : ''}
                </div>
            </div>
            <NewMessage
                targetID={targetID}
                myID={myID}
                newMessageMethods={newMessageMethods}
                newMessageValue={newMessageValue}
            />
        </div>
    )
}

export default DialogField