import React from 'react';
import c from './NewMessage.module.css';

const NewMessage = ({ addMessage,changeMessage, newMessageValue, }) => {
    const textArea = React.createRef();
    function addMessageByEnter(e) {
        if ((e.code === 'Enter' || e.keyCode === 0) && e.ctrlKey) {
            textArea.current.value += '\n';
        }
        if ((e.code === 'Enter' || e.keyCode === 0) && !e.ctrlKey) {
            textArea.current.value === '' || addMessage();
            textArea.current.value = ''
        }
    }
    function addMessageByButtonCkick() {
        textArea.current.value === '' || addMessage();
    }
    function onChangeMessage(e){
        if (e.nativeEvent.inputType !== "insertLineBreak") {
            changeMessage(textArea.current.value)
        }
    }


    return (
        <div className={c.new_message}>
            <textarea
                autoFocus
                className={c.textarea}
                ref={textArea}
                placeholder="what's up?"
                onKeyDown={addMessageByEnter}
                onChange={onChangeMessage}
                value={newMessageValue}
            >
            </textarea>
            <button onClick={addMessageByButtonCkick} className={c.button}>Add</button>
        </div>
    )
}
export default NewMessage