import React from 'react';
import c from './Dialogs.module.css';
import DialogsList from './DialogsList/DialogsList';
import DialogField from './DialogField/DialogField';


const Dialogs = () => {
    const { dialogs } = require(`../../UsersJSON/${window.mySNQId}/info.json`);
    return (
        <div className={c.dialogs_wrapper}>
            <DialogsList idList={Object.keys(dialogs)} />
            <DialogField dialog={dialogs['1']}/>
        </div>
    )
}

export default Dialogs