import React from 'react';
import c from './Dialogs.module.css';
import DialogsList from './DialogsList/DialogsList';
import DialogField from './DialogField/DialogField';


const Dialogs = () => {
    return (
        <div className={c.dialogs_wrapper}>
            <DialogsList users={[
                {
                    name: 'General Grievous',
                    path: 'grievous'
                },
                {
                    name: 'General Kenobi',
                    path: 'kenobi'
                },

            ]} />
            <DialogField
                messages={[
                    {
                        content: 'hello there',
                        from:{
                            name: 'General Kenobi',
                            path: 'kenobi'
                        },
                    },
                    {
                        content: 'General kenobi!!!',
                        from:{
                            name: 'General Grievous',
                            path: 'grievous'
                        },
                    },
                    {
                        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam explicabo, omnis debitis animi voluptatem ea? Ea, rem, et sunt adipisci soluta nisi cum laboriosam nihil cumque pariatur, facilis dolorem cupiditate!',
                        from:{
                            name: 'General Kenobi',
                            path: 'kenobi'
                        },
                    },
                    
                ]}
            />
        </div>
    )
}

export default Dialogs