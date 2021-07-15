import React from 'react';
import c from './Posts.module.css';
import Post from './Post/Post'

const Posts = ({ posts }) => {
    return (
        <div className={c.posts}>
            {posts.map((p, i) => {
                return <Post
                    post={p}
                    key={i}
                />
            })}
        </div>
    )
}

export default Posts