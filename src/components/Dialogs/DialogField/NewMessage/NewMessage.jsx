import React from 'react';
import c from './NewMessage.module.css';

const NewMessage = ({ newMessageMethods: { change, add }, newMessageValue }) => {
    const textArea = React.createRef();

    function addMessageByEnter(e) {
        if ((e.code === 'Enter' || e.keyCode === 0) && e.ctrlKey) {
            textArea.current.value += '\n';
        }
        if ((e.code === 'Enter' || e.keyCode === 0) && !e.ctrlKey) {
            textArea.current.value === '' || add();
            textArea.current.value = ''
        }
    }
    function addMessageByButtonCkick() {
        textArea.current.value === '' || add();
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
                    if(e.nativeEvent.inputType!== "insertLineBreak"){                        
                        change(textArea.current.value)
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