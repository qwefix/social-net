import React from 'react';
import c from './NewPost.module.css';

const NewPost = ({ myID, id, inputValue, add, change }) => {
    const newPostTextArea = React.createRef();
    const addPostByButtonClick = () => {
        newPostTextArea.current.value === '' || add(id, myID)
    }
    const addPostByEnter = (e) => {
        if ((e.key === 'Enter' || e.keyCode === 0) && e.ctrlKey) {
            newPostTextArea.current.value === '' || add(id, myID)
        }
    }

    return (
        <div className={c.new_post}>
            <textarea
                className={c.textarea}
                ref={newPostTextArea}
                placeholder="what's up? "
                onChange={() => {
                    change(newPostTextArea.current.value, id, myID);
                }}
                onKeyUp={addPostByEnter}
                value={inputValue}
            >
            </textarea>
            <button onClick={addPostByButtonClick} className={c.button}>Add</button>
        </div>
    )
}

export default NewPost;