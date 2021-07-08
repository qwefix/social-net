import React from 'react';
import c from'./Profile.module.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import ProfileHeader from './ProfileHeader/ProfileHeader';

const Profile = (props) => {
    const id = props.match.params.id;
    const {name,posts} = require(`../../UsersJSON/${id}/info.json`);
    const ava = require(`../../UsersJSON/${id}/ava.jpg`).default;
    const wallPaper = require(`../../UsersJSON/${id}/wp.jpg`).default;
    return (
        <main className = {c.profile}>
            <ProfileHeader name={name} ava={ava} wp={wallPaper}/>
            <NewPost/>
            <Posts name={name} ava={ava} posts={posts}/>
        </main>
    )
}

export default Profile;