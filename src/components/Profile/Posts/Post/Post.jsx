import React from 'react';
import c from './Post.module.css';
import ava from '../../ava.jpg';
import likeImg from './like.png';

const Post = (props) => {    
    return (
        <div className={c.post}>
            <div className={c.ava}>
                <img src={ava} alt="avatar" />
            </div>
            <div className={c.content}>
                <p className={c.user_name}>Darya Bazhenova</p>
                {props.text}
            </div>
            <div className={c.like_wrapper} >
                <p className={c.likes}>{props.likes}</p>
                <div className={c.like_button} onClick={like}>
                    <img src={likeImg} alt="like" />
                </div>
            </div>
        </div >
    )
}

function like({ target }) {
    console.log(this);
    const likeButton = target.closest(`.${c.like_button}`);
    const likes =  target.closest(`.${c.like_wrapper}`).querySelector(`.${c.likes}`);
    if(likeButton.classList.contains(`${c.active}`)){
        likes.innerText--;
    }else{
        likes.innerText++;
    }
    likeButton.classList.toggle(`${c.active}`);
};

export default Post