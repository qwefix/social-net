import React from 'react';
import c from './Message.module.css';


const Message = ({ message }) => {
    return (
        <div className={`${c.message}`}>
            <div className={c.ava}>
                <img src={require(`../../../../Users/${message.from.path}/ava.jpg`).default} alt="" />
            </div>
            <div className={c.name}>
                {message.from.name}
            </div>
            <div className={c.content}>
                <div className={c.arrow} />
                {message.content}
            </div>
        </div>
    )
}

export default Message