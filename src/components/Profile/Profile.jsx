import React from 'react';
import c from './Profile.module.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import ProfileHeader from './ProfileHeader/ProfileHeader';

const Profile = ({ posts,newPostValue,newPostMethods,profileHeaderData }) => {
    return (
        <main className={c.profile}>
            <ProfileHeader {...profileHeaderData} />
            <NewPost  {...newPostMethods} newPostValue={newPostValue}/>
            <Posts posts={posts} />
        </main>
    )
}

export default Profile;