import React from 'react';
import UsersPureFunc from './UsersPureFunc';
import * as axios from 'axios';

export default class UsersClass extends React.Component {
    componentDidMount() {
        if (!this.props.users.length) this.setPage(1);
    }
    setPage(page) {
        this.props.selectPage(page)
        this.props.setSpinner(true)
        this.lastPromice = page;
        this.usersPromice = axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=10`)
        this.usersPromice.then(response => {
            if (page === this.lastPromice) {
                this.props.setUsers(response)
                this.props.setSpinner(false)
            }
        },
            () => {
                setTimeout(() => {
                    if (page === this.lastPromice) {
                        this.setPage(page)
                    }
                }, 2000)
            })
    }

render() {
    return <UsersPureFunc
        spinner={this.props.spinner}
        users={this.props.users}
        pagination={this.props.pagination}
        currentPage={this.props.currentPage}
        selectPage={this.setPage.bind(this)}
        totalPages={this.props.totalPages}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
    />
}
}
