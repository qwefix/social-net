import React from 'react';
import c from './Post.module.css';
import ava from '../../ava.jpg';

const Post = () => {
    return (
        <div className={c.post}>
            <div className={c.ava}>
                <img src={ava} alt="avatar" />
            </div>
            <div className={c.content}>
                <p className={c.user_name}>Darya Bazhenova</p>
            </div>
        </div >
    )
}

export default Post