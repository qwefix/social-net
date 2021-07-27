import React from 'react';
import c from './Dialogs.module.css';
import DialogsList from './DialogsList/DialogsList';
import DialogField from './DialogField/DialogField';


const Dialogs = ({ dialog, dialogsList, dispatch, newMessageValue, IDs }) => {
    return (
        <div className={c.dialogs_wrapper}>
            <DialogsList dialogsList={dialogsList} />
            <DialogField
                IDs={IDs}
                dialog={dialog}
                dispatch={dispatch}
                newMessageValue={newMessageValue}
            />
        </div>
    )
}

export default Dialogs