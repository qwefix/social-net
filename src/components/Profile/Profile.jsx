import React from 'react';
import c from'./Profile.module.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import ProfileHeader from './ProfileHeader/ProfileHeader';

const Profile = () => {
    return (
        <main className = {c.profile}>
            <ProfileHeader/>
            <NewPost/>
            <Posts/>
        </main>
    )
}

export default Profile;