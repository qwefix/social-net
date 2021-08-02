import React from 'react';
import c from './Dialogs.module.css';
import DialogsList from './DialogsList/DialogsList';
import DialogField from './DialogField/DialogField';


const Dialogs = ({targetID,dialogsList,dialogField}) => {
    return (
        <div className={c.dialogs_wrapper}>
            <DialogsList dialogsList={dialogsList} />
            <DialogField
                {...dialogField[targetID]}
                targetID={targetID}
            />
        </div>
    )
}

export default Dialogs