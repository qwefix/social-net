import React from 'react';
import c from './Message.module.css';
import { NavLink } from 'react-router-dom';

const Message = ({ message: { content, sendBy } }) => {
    return (
        <div className={`${c.message} ${sendBy===window.mySNQId?c.from_me:'no'}`}>

            <NavLink className={c.ava} to={`/profile/${sendBy}`}>
                <div>
                    <img src={require(`../../../../UsersJSON/${sendBy}/ava.jpg`).default} alt="" />
                </div>
            </NavLink>

            <div className={c.name}>
                <NavLink to={`/profile/${sendBy}`}>
                    {require(`../../../../UsersJSON/${sendBy}/info.json`).name}
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