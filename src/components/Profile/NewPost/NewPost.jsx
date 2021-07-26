import React from 'react';
import c from './NewPost.module.css';

const NewPost = ({ newPostValue, dispatch, }) => {
    const newPostTextArea = React.createRef();
    const addPostByButtonClick = () => {
        newPostTextArea.current.value === '' || dispatch({
            type: 'ADD-POST',
        })
    };
    const addPostByEnter = (e) => {
        if ((e.key === 'Enter' || e.keyCode === 0) && e.ctrlKey) {
            newPostTextArea.current.value === '' || dispatch({
                type: 'ADD-POST',
            })
        }
    }

    return (
        <div className={c.new_post}>
            <textarea
                className={c.textarea}
                ref={newPostTextArea}
                placeholder="what's up? "
                onChange={() => {
                    dispatch({
                        type: 'CHANGE-POST',
                        content: newPostTextArea.current.value,
                    });
                }}
                onKeyUp={addPostByEnter}
                value={newPostValue}
            >
            </textarea>
            <button onClick={addPostByButtonClick} className={c.button}>Add</button>
        </div>
    )
}

export default NewPost;