import React from 'react';
import c from './Dialogs.module.css';
import DialogsList from './DialogsList/DialogsList';
import DialogField from './DialogField/DialogField';


const Dialogs = ({ myID, targetID, dialog, dialogsList, newMessageMethods,newMessageValue }) => {
    return (
        <div className={c.dialogs_wrapper}>
            <DialogsList dialogsList={dialogsList} />
            <DialogField
                myID={myID}
                targetID={targetID}
                dialog={dialog || null}
                newMessageMethods={newMessageMethods}
                newMessageValue={newMessageValue}
            />
        </div>
    )
}

export default Dialogs