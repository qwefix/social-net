import React from 'react';
import UsersPureFunc from './UsersPureFunc';


export default class UsersClass extends React.Component {
    componentDidMount() {
        if (!this.props.users.length) this.props.selectPage(1);
    }
    render() {
        return <UsersPureFunc
            {...this.props}
        />
    }
}
