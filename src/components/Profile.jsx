import React from 'react';
import style from'./styles/Profile.module.css';
import wallpaperImg from'./assets/wallpaper.jpg'

const Profile = () => {
    return (
        <main>
            <img src={wallpaperImg} alt='wallpaper' className={style.image}/>
            <div className={style.ava} >
                ava+desc
        </div>
            <div className = {style.posts}>
                <div className = {style.post}>
                    Post
                </div >
                <div className = {style.post}>
                    Post
                </div>
                <div className = {style.post}>
                    Post
                </div>
            </div>
        </main>
    )
}

export default Profile;