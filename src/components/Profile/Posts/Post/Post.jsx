import React from 'react';
import c from './Post.module.css';
import ava from '../../ava.jpg';
import likeImg from './like.png'

const Post = () => {
    function like({ target }) {
        const likeButton = target.closest(`.${c.like_button}`);
        const likes =  target.closest(`.${c.like_wrapper}`).querySelector(`.${c.likes}`);
        if(likeButton.classList.contains(`${c.active}`)){
            likes.innerText--;
        }else{
            likes.innerText++;
        }
        likeButton.classList.toggle(`${c.active}`);
    };
    return (
        <div className={c.post}>
            <div className={c.ava}>
                <img src={ava} alt="avatar" />
            </div>
            <div className={c.content}>
                <p className={c.user_name}>Darya Bazhenova</p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, laudantium alias quod dolore tempore atque eveniet porro aspernatur neque illum aliquid quam magni dolorem eum molestiae vel. Illo nesciunt optio esse asperiores!
            </div>
            <div className={c.like_wrapper} >
                <p className={c.likes}>3</p>
                <div className={c.like_button} onClick={like}>
                    <img src={likeImg} alt="like" />
                </div>
            </div>
        </div >
    )
}

export default Post