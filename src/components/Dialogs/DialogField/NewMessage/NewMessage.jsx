import React from 'react';
import c from './NewMessage.module.css';

const NewMessage = ({ dispatch, newMessageValue,myID,targetID }) => {
    const textArea = React.createRef();

    function addMessageByEnter(e) {
        if ((e.code === 'Enter' || e.keyCode === 0) && e.ctrlKey) {
            textArea.current.value += '\n';
        }
        if ((e.code === 'Enter' || e.keyCode === 0) && !e.ctrlKey) {
            textArea.current.value === '' ||dispatch({
                type:'ADD-MESSAGE',
                myID,
                targetID,
            });
            textArea.current.value = ''
        }
    }
    function addMessageByButtonCkick() {
        textArea.current.value === '' || dispatch({
            type:'ADD-MESSAGE',
            myID,
            targetID,
        });
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
                        dispatch({
                            type:'CHANGE-MESSAGE',
                            content:textArea.current.value,
                            myID,
                            targetID,
                        })
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