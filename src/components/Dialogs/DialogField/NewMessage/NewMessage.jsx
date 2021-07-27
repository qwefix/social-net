import React from 'react';
import c from './NewMessage.module.css';
import { actionCreator } from '../../../../redux/store'

const NewMessage = ({ dispatch, newMessageValue, IDs }) => {
    const textArea = React.createRef();

    function addMessageByEnter(e) {
        if ((e.code === 'Enter' || e.keyCode === 0) && e.ctrlKey) {
            textArea.current.value += '\n';
        }
        if ((e.code === 'Enter' || e.keyCode === 0) && !e.ctrlKey) {
            textArea.current.value === '' || dispatch(actionCreator.newMessage.add(IDs));
            textArea.current.value = ''
        }
    }
    function addMessageByButtonCkick() {
        textArea.current.value === '' || dispatch(actionCreator.newMessage.add(IDs));
    }


    return (
        <div className={c.new_message}>
            <textarea
                autoFocus
                className={c.textarea}
                ref={textArea}
                placeholder="what's up?"
                onKeyDown={addMessageByEnter}
                onChange={(e) => {
                    if (e.nativeEvent.inputType !== "insertLineBreak") {
                        dispatch(actionCreator.newMessage.change(IDs, textArea.current.value));
                    }
                }
                }
                value={newMessageValue}
            >
            </textarea>
            <button onClick={addMessageByButtonCkick} className={c.button}>Add</button>
        </div>
    )
}
export default NewMessage