import React from 'react';
import UsersPureFunc from './UsersPureFunc';

export default class UsersClass extends React.Component {

    componentDidMount() {
        if (!this.props.users.length) this.props.setPage(1);
    }   

    render() {
        return <UsersPureFunc
            spinner={this.props.spinner}
            users={this.props.users}
            pagination={this.props.pagination}
            currentPage={this.props.currentPage}
            selectPage={this.props.setPage}
            totalPages={this.props.totalPages}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
        />
    }
}
