import React from 'react';
import c from './DialogField.module.css';
import Message from './Message/Message';
import NewMessage from './NewMessage/NewMessage';

const DialogField = ({ dialog, dispatch, newMessageValue,myID,targetID }) => {
    return (
        <div className={c.mainWrapper}>
            <div className={c.wrapper}>
                <div className={c.field}>
                    {dialog ? dialog.map((m, i) => <Message {...m} key={i}  />) : ''}
                </div>
            </div>
            <NewMessage
                targetID={targetID}
                myID={myID}
                dispatch={dispatch}
                newMessageValue={newMessageValue}
            />
        </div>
    )
}

export default DialogField