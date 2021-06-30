import React from 'react';
import c from './Posts.module.css';
import Post from './Post/Post'

const Posts = () => {
    return (
        <div className={c.posts}>
            <Post text='hello' likes={1} />
            <Post text='text texttexttexttexttext texttexttexttexttexttextt exttexttexttex ttexttexttexttext'/>
            <Post/> 
        </div>
    )
}

export default Posts