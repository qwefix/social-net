import React from 'react';
import c from './Profile.module.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import ProfileHeader from './ProfileHeader/ProfileHeader';

const Profile = ({ ava, wp, name, posts }) => {
    return (
        <main className={c.profile}>
            <ProfileHeader name={name} ava={ava} wp={wp} />
            <NewPost />
            <Posts posts={posts} />
        </main>
    )
}

export default Profile;