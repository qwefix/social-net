import React from 'react';
import Profile from './Profile'
import * as axios from 'axios';

class ProfileClass extends React.Component {
    componentDidMount() {
        this.getUser(this.props.targetID)
    }
    getUser = (userID) => {
        if (!this.props.headers[this.props.targetID]) {
            console.log(`fetching profile ${userID}`)
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
                .then(response => {
                    this.props.setSpinner(true)
                    this.props.setProfile(response.data)
                    if (this.props.targetID === userID) { this.props.setSpinner(false) }
                },
                    () => {
                        setTimeout(() => {
                            this.getUser(userID)
                        }, 2000)
                    })
        }
    }
    render() {
        let targetProfile = this.props.headers[this.props.targetID]
        return (
            targetProfile ?
                <Profile
                    spinner={this.props.spinner}
                    targetID={this.props.targetID}
                    profileHeaderData={{
                        ava: targetProfile.photos.large,
                        fullName: targetProfile.fullName,
                        aboutMe: targetProfile.aboutMe,
                        contacts: targetProfile.contacts,
                        lookingForAJob: targetProfile.lookingForAJob,
                        lookingForAJobDescription: targetProfile.lookingForAJobDescription,
                    }}
                />
                :
                <Profile
                    spinner={this.props.spinner}
                />
        )
    }
}

export default ProfileClass;