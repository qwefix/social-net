import React from 'react';
import c from './Post.module.css';
import likeImg from './like.png';
import { NavLink } from 'react-router-dom';

const Post = ({ ava, likes, content, author }) => {
    return (
        <div className={c.post}>

            <NavLink to={`/profile/${author}`} className={c.ava}>
                <img src={ava} alt="avatar" />
            </NavLink>

            <div className={c.content}>
                <NavLink to={`/profile/${author}`} className={c.user_name}>
                    {require(`../../../../UsersJSON/${author}/info.json`).name}
                </NavLink>
                <p>{content}</p>
            </div>

            <div className={c.like_wrapper} >
                <p className={c.likes}>{likes}</p>
                <div className={c.like_button} onClick={like}>
                    <img src={likeImg} alt="like" />
                </div>
            </div>
        </div >
    )
}

function like({ target }) {
    const likeButton = target.closest(`.${c.like_button}`);
    const likes = target.closest(`.${c.like_wrapper}`).querySelector(`.${c.likes}`);
    if (likeButton.classList.contains(`${c.active}`)) {
        likes.innerText--;
    } else {
        likes.innerText++;
    }
    likeButton.classList.toggle(`${c.active}`);
};

export default Post