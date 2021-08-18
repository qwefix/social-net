import React from 'react';
import c from './ProfileHeader.module.css';


const ProfileHeader = ({ ava, aboutMe, fullName, lookingForAJob, lookingForAJobDescription, contacts }) => {
    console.log(contacts)
    return (
        <header className={c.header}>
            <div className={c.ava_description} >
                <div className={c.ava}>
                    <img src={ava} alt="avatar" />
                </div>
                <div className={c.info_wrapper}>
                    <div className={c.name}>{fullName}</div>
                    <div className={c.description}>{aboutMe}</div>
                    <div className={c.job}>
                        <p>Looking for a job:
                            {
                                lookingForAJob ?
                                    <span style={{ color: 'red' }}>Yes</span>
                                    :
                                    <span style={{ color: 'green' }}>No</span>
                            }
                        </p>
                        <p>
                            {lookingForAJobDescription}
                        </p>
                    </div>
                    <div className={c.contacts}>
                            {Object.entries(contacts).filter(a => {
                                console.log(a[1])
                                return !!a[1]
                            }).map((item, i) =>
                                <div key={i}>{item[1]}: {item[0]}</div>
                            )}
                    </div>
                </div>
            </div>
        </header>
    )
};

export default ProfileHeader