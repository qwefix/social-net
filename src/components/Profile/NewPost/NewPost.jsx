import React from 'react';
import c from './NewPost.module.css';

const NewPost = () => {
    const newPostTextArea = React.createRef();
    const addPostHandler = (e) => {
        if (e.type === 'click' || (e.type === "keydown" && (e.code === 'Enter' || e.keyCode === 0)&&e.ctrlKey)) {
            console.log(e);
            e.preventDefault();
            newPostTextArea.current.value === '' || alert("must be added post: " + newPostTextArea.current.value);
            newPostTextArea.current.value = '';
        }
    }
    const autoGrow=(e)=>{
        e.target.style.height = "10px";
        e.target.style.height = ( e.target.scrollHeight)+"px";
    }

    return (
        <div className={c.new_post}>
            <textarea
                className={c.textarea}
                ref={newPostTextArea}
                placeholder="what's up? "
                onKeyDown={addPostHandler}
                onChange = {autoGrow}
            >
            </textarea>
            <button onClick={addPostHandler} className={c.button}>Add</button>
        </div>
    )
}

export default NewPost;