import React from 'react';
import c from './ProfileHeader.module.css';


const ProfileHeader = ({ ava, wp, name }) => {
    return (
        <header className={c.header}>

            <div className={c.wallpaper_box}>
                <img src={wp} alt='wallpaper' className={c.wallpaper} />
            </div>

            <div className={c.ava_description} >
                <div className={c.ava}>
                    <img src={ava} alt="avatar" />
                </div>
                <div className={c.description}>
                    <p>{name}</p>
                </div>
            </div>
        </header>
    )
};

export default ProfileHeader