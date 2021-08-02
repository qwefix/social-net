import React from 'react';
import { actionCreator } from '../../../../redux/reducers/dialogs'
import NewMessage from './NewMessage';

const NewMessageContainer = ({ store,targetID }) => {  
    const state = store.getState().dialogs
    const IDs = {targetID,myID:state.myID}
    
    function addMessage(){
        store.dispatch(actionCreator.add(IDs))
    }
    function changeMessage(text){
        store.dispatch(actionCreator.change(IDs,text))
    }
    return (
        <NewMessage
            addMessage={addMessage}
            changeMessage={changeMessage}
            newMessageValue={state.dialogField[targetID].newMessageValue}
        />
    )
    
}
export default NewMessageContainer