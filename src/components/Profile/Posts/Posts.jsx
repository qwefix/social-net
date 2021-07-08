import React from 'react';
import c from './Posts.module.css';
import Post from './Post/Post'

const Posts = ({ posts }) => {
    return (
        <div className={c.posts}>
            {posts.map(({ content, likes, author }, i) => {
                return <Post
                    ava={require(`../../../UsersJSON/${author}/ava.jpg`).default}
                    author={author}
                    key={i}
                    likes={likes}
                    content={content}
                />
            })}
        </div>
    )
}

export default Posts