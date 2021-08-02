import React from 'react';
import { actionCreator } from '../../../redux/reducers/profiles';
import c from './NewPost.module.css';

const NewPost = ({ newPostValue, dispatch,IDs }) => {
    const newPostTextArea = React.createRef();
    const addPostByButtonClick = () => {
        newPostTextArea.current.value === '' || dispatch(actionCreator.add(IDs));
    };
    const addPostByEnter = (e) => {
        if ((e.key === 'Enter' || e.keyCode === 0) && e.ctrlKey) {
            newPostTextArea.current.value === '' || dispatch(actionCreator.add(IDs));
        }
    }

    return (
        <div className={c.new_post}>
            <textarea
                className={c.textarea}
                ref={newPostTextArea}
                placeholder="what's up? "
                onChange={() => {
                    dispatch(actionCreator.change(IDs,newPostTextArea.current.value));
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