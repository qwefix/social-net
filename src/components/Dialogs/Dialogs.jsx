import React from 'react';
import c from './Dialogs.module.css';
import DialogsList from './DialogsList/DialogsList';
import DialogField from './DialogField/DialogField';


const Dialogs = (props) => {
    const { dialogs } = require(`../../UsersJSON/${window.mySNQId}/info.json`);
    const targetDialog =dialogs[props.match.params.id];
    return (
        <div className={c.dialogs_wrapper}>
            <DialogsList idList={Object.keys(dialogs)} />
            <DialogField dialog={targetDialog||null} />
        </div>
    )
}

export default Dialogs