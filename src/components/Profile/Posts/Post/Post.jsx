import React from 'react';
import c from './Post.module.css';
import ava from '../../ava.jpg';
import likeImg from './like.png'

const Post = () => {
    function like({target}){
        target.closest(`.${c.like_box}`).classList.toggle(`${c.active}`);
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
            <div className={c.like_box} onClick={like}>
                <img src={likeImg} alt="like" />
            </div>
        </div >
    )
}

export default Post