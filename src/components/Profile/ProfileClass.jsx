import React from 'react';
import Profile from './Profile';

class ProfileClass extends React.Component {
    componentDidMount() {
        this.props.getProfileHeader(this.props.targetID)
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