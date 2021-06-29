import React from 'react';
import c from './ProfileHeader.module.css';
import wallpaperImg from'./wallpaper.jpg';

const ProfileHeader = () => {
    return (
        <header className={c.header}>
            <div className = {c.wallpaper_box}>
                <img src={wallpaperImg} alt='wallpaper' className={c.wallpaper} />
            </div>
            <div className={c.ava} >
                ava+desc
            </div>
        </header>

    )
};

export default ProfileHeader