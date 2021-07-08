import React from 'react';
import c from './Message.module.css';
import { NavLink } from 'react-router-dom';

const Message = ({ message: { content, sendBy } }) => {
    return (
        <div className={`${c.message}`}>

            <NavLink className={c.ava} to={`/${sendBy}`}>
                <div>
                    <img src={require(`../../../../UsersJSON/${sendBy}/ava.jpg`).default} alt="" />
                </div>
            </NavLink>

            <div className={c.name}>
                <NavLink to={`/${sendBy}`}>
                    {require(`../../../../UsersJSON/${sendBy}/info.json`).name}
                </NavLink>
            </div>

            <div className={c.content}>
                <div className={c.arrow} />
                {content}
            </div>
        </div>
    )
}

export default Message