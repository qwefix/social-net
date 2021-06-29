import React from 'react';
import c from './NewPost.module.css';

const NewPost = ()=>{
    return(
        <div className = {c.NewPost}>
            <textarea className = {c.textarea} ></textarea>
            <button className = {c.button}>Add post</button>
        </div>
    )
}

export default NewPost;