import React from 'react';
import c from './Message.module.css';
import { NavLink } from 'react-router-dom';

const Message = ({ content, sendBy, name, ava,fromMe } ) => {
    return (
        <div className={`${c.message} ${fromMe ? c.from_me : ''}`}>

            <NavLink className={c.ava} to={`/profile/${sendBy}`}>
                <div>
                    <img src={ava} alt="" />
                </div>
            </NavLink>

            <div className={c.name}>
                <NavLink to={`/profile/${sendBy}`}>
                    {name}
                </NavLink>
            </div>

            <div className={c.content}>
                <div className={c.arrow} />
                <p>{content}</p>
            </div>
        </div>
    )
}

export default Message