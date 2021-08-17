import React from 'react';
import Spinner from '../common/Spinner/Spinner';
import c from './Profile.module.css';
// import Posts from './Posts/Posts';
import ProfileHeader from './ProfileHeader/ProfileHeader';
// import NewPostContainer from './NewPost/NewPostContainer';

const Profile = ({profileHeaderData,spinner}) => {
    profileHeaderData?
    document.title = `SN ${profileHeaderData.fullName}`
    :
    document.title = `SN Loading profile`
    return (
        spinner?
        <Spinner/>
        :
        <main className={c.profile}>
            <ProfileHeader {...profileHeaderData} />
            {/* <NewPostContainer targetID={IDs}/>
            <Posts posts={posts} /> */}
        </main>
    )
}

export default Profile;