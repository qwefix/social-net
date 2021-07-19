import React from 'react';
import c from './NewMessage.module.css';

const NewMessage = ()=>{
    const textArea = React.createRef();
    const addPostHandler = (e) => {
        if (e.type === 'click' || (e.type === "keydown" && (e.code === 'Enter' || e.keyCode === 0)&&!e.ctrlKey)) {
            e.preventDefault();
            textArea.current.value === '' || alert("must be send message: " + textArea.current.value);
            textArea.current.value = '';
            autoGrow({target:textArea.current})
        }
        if((e.code === 'Enter' || e.keyCode === 0)&&e.ctrlKey){
            textArea.current.value +='\n';
            autoGrow({target:textArea.current})
        }
    }
    const autoGrow=(e   )=>{
        e.target.style.height = "10px";
        e.target.style.height = ( e.target.scrollHeight)+"px";
    }
    return(
        <div className={c.new_message}>
            <textarea
                className={c.textarea}
                ref={textArea}
                placeholder="what's up? "
                onKeyDown={addPostHandler}
                onChange = {autoGrow}
            >
            </textarea>
            <button onClick={addPostHandler} className={c.button}>Add</button>
        </div>
    )
}
export default NewMessage