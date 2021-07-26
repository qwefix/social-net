import React from 'react';
import c from './Profile.module.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import ProfileHeader from './ProfileHeader/ProfileHeader';

const Profile = ({ posts, newPostValue, dispatch, profileHeaderData, myID, targetID }) => {
    return (
        <main className={c.profile}>
            <ProfileHeader {...profileHeaderData} />
            <NewPost targetID={targetID} myID={myID} dispatch={dispatch} newPostValue={newPostValue} />
            <Posts posts={posts} />
        </main>
    )
}

export default Profile;