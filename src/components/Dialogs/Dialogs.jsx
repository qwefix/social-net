import React from 'react';
import c from './Dialogs.module.css';
import DialogsList from './DialogsList/DialogsList';
import DialogField from './DialogField/DialogField';


const Dialogs = ({ targetID, myID }) => {
    const { dialogs } = require(`../../UsersJSON/${myID}/info.json`);
    const targetDialog = dialogs[targetID];
    return (
        <div className={c.dialogs_wrapper}>
            <DialogsList idList={Object.keys(dialogs)} />
            <DialogField myID={myID} dialog={targetDialog || null} />
        </div>
    )
}

export default Dialogs