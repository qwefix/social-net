import React from 'react';
import c from './DialogField.module.css';
import Message from './Message/Message';

const DialogField = (props) => {
    return (
        <div className={c.field}>
            {props.messages.map((a,i)=>{
               return  <Message message={a} key={i} />
            })}
        </div>
    )
}

export default DialogField