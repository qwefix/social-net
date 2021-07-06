import React from 'react';
import c from './Dialogs.module.css';
import DialogsList from './DialogsList/DialogsList'


const Dialogs = () => {
    return (
        <div className = {c.dialogs_wrapper}>
            <DialogsList users={[
                {
                    name:'General Grievous',
                    path:'grievous'
                },
                {
                    name:'General Kenobi',
                    path:'kenobi'
                },               
              
                ]}/>
            {/* <div className = {c.messages}>                
                <div className = {`${c.message} ${c.to_me}`}>
                    hello  there
                </div>
                <div className = {`${c.message} ${c.to_me}`}>
                    general kenobi
                </div>
            </div> */}
        </div>
    )
}

export default Dialogs