import React from 'react';
import c from './Posts.module.css';
import Post from './Post/Post'

const Posts = () => {
    return (
        <div className={c.posts}>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}

export default Posts