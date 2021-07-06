import React from 'react';
import c from './DialogsList.module.css';
import DialogsItem from './DialogsItem/DialogsItem';


const DialogsList = (props) => {
    return (
        <div className = {c.dialogs_list}>
        <p className = {c.header}>Dialogs</p>
        {props.users.map((element,i) => {
            return (<DialogsItem name={element.name} path={element.path} key ={i}/>)
        })}
        </div>
    )
}

export default DialogsList