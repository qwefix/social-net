import React from 'react';
import c from './NewPost.module.css';

const NewPost = ({ myID, id, inputValue, newPostFuncs: { keydownPostBLL, addPostBLL, postEntBspHandlerBLL } }) => {
    const newPostTextArea = React.createRef();
    const addPostHandler = (e) => {
        if (e.type === 'click' || (e.type === "keyup" && (e.code === 'Enter' || e.keyCode === 0) && e.ctrlKey)) {
            newPostTextArea.current.value === '' || addPostBLL(myID, id)
        }
        if (e.type === "keyup") {
            if (e.key === "Enter" && !e.ctrlKey) {
                postEntBspHandlerBLL('ent', { myID, id })            }
            if (e.key === "Backspace") {
                postEntBspHandlerBLL('bsp', { myID, id })
            }
        }
    }

    return (
        <div className={c.new_post}>
            <textarea
                className={c.textarea}
                ref={newPostTextArea}
                placeholder="what's up? "
                onKeyUp={addPostHandler}
                onChange={(e) => {
                    keydownPostBLL(e, { myID, id });
                }}
                value={inputValue}
            >
            </textarea>
            <button onClick={addPostHandler} className={c.button}>Add</button>
        </div>
    )
}

export default NewPost;