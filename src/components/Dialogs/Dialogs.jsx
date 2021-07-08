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
// [
//     {
//         content: 'hello there',
//         from: {
//             name: 'General Kenobi',
//             path: '2'
//         },
//     },
//     {
//         content: 'General kenobi!!!',
//         from: {
//             name: 'General Grievous',
//             path: '1'
//         },
//     },
//     {
//         content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam explicabo, omnis debitis animi voluptatem ea? Ea, rem, et sunt adipisci soluta nisi cum laboriosam nihil cumque pariatur, facilis dolorem cupiditate!',
//         from: {
//             name: 'General Kenobi',
//             path: '2'
//         },
//     },

// ]