import React from 'react';
import c from './Profile.module.css';
import Posts from './Posts/Posts';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import NewPostContainer from './NewPost/NewPostContainer';

const Profile = ({ posts, store, profileHeaderData, targetID }) => {
    return (
        <main className={c.profile}>
            <ProfileHeader {...profileHeaderData} />
            <NewPostContainer store={store} targetID={targetID}/>
            <Posts posts={posts} />
        </main>
    )
}

export default Profile;