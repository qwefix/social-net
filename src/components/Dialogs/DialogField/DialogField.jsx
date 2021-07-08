import React from 'react';
import c from './DialogField.module.css';
import Message from './Message/Message';

const DialogField = ({dialog}) => {
    console.log(dialog)
    return (
        <div className={c.field}>
            {dialog.map((a,i)=>{
               return  <Message message={a} key={i} />
            })}
        </div>
    )
}

export default DialogField