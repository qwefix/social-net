import React from 'react';
import c from './Dialogs.module.css';
import DialogsList from './DialogsList/DialogsList';
import DialogField from './DialogField/DialogField';


const Dialogs = ({dialog, dialogsList, newMessageMethods, newMessageValue}) => {
    return (
        <div className={c.dialogs_wrapper}>
            <DialogsList dialogsList={dialogsList} />
            <DialogField
                dialog={dialog}
                newMessageMethods={newMessageMethods}
                newMessageValue={newMessageValue}
            />
        </div>
    )
}

export default Dialogs