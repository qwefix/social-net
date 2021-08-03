import React from 'react';
import c from './Dialogs.module.css';
import DialogsList from './DialogsList/DialogsList';
import DialogField from './DialogField/DialogField';


const Dialogs = ({targetID,myID,dialogsList,dialogField}) => {
    return (
        <div className={c.dialogs_wrapper}>
            <DialogsList dialogsList={dialogsList} />
            <DialogField
                {...dialogField[targetID]}
                IDs={{targetID,myID}}
            />
        </div>
    )
}

export default Dialogs