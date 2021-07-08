import React from 'react';
import c from'./Profile.module.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import ProfileHeader from './ProfileHeader/ProfileHeader';

const Profile = () => {
    const {name,posts} = require(`../../UsersJSON/${window.mySNQId}/info.json`);
    const ava = require(`../../UsersJSON/${window.mySNQId}/ava.jpg`).default;
    const wallPaper = require(`../../UsersJSON/${window.mySNQId}/wp.jpg`).default;
    return (
        <main className = {c.profile}>
            <ProfileHeader name={name} ava={ava} wp={wallPaper}/>
            <NewPost/>
            <Posts name={name} ava={ava} posts={posts}/>
        </main>
    )
}

export default Profile;