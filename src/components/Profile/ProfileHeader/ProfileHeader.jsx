import React from 'react';
import c from './ProfileHeader.module.css';
import wallpaperImg from './wallpaper.jpg';
import ava from '../ava.jpg'

const ProfileHeader = () => {
    return (
        <header className={c.header}>
            <div className={c.wallpaper_box}>
                <img src={wallpaperImg} alt='wallpaper' className={c.wallpaper} />
            </div>
            <div className={c.ava_description} >
                <div className={c.ava}>
                    <img src={ava} alt="avatar" />
                </div>
                <div className={c.description}>
                    <p>
                        Darya Bazhenova
                    </p>
                </div>
            </div>
        </header>
    )
};

export default ProfileHeader