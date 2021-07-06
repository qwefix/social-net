import React from 'react';
import c from './DialogsItem.module.css';

const DialogsItem = (props) => {
    return (        
        <div className={c.item}>
            <div className= {c.ava}>
                <img src={require(`../../../../Users/${props.path}/ava.jpg`).default} alt="" />
            </div>
            <div className = {c.name}>
                {props.name}
            </div>

        </div>
    )
}

export default DialogsItem
