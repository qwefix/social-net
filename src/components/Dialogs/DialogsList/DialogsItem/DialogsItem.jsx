import React from 'react';
import c from './DialogsItem.module.css';

const DialogsItem = ({id}) => {
    return (        
        <div className={c.item}>
            <div className= {c.ava}>
            <img src={require(`../../../../UsersJSON/${id}/ava.jpg`).default} alt="" />
            </div>
            <div className = {c.name}>
                {require(`../../../../UsersJSON/${id}/info.json`).name}
            </div>
        </div>
    )
}

export default DialogsItem
