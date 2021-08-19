import React from 'react';
import UsersPureFunc from './UsersPureFunc';
import usersAPI from '../../api/users';

export default class UsersClass extends React.Component {
    follow = (id) => {
        this.props.setSpinner(true)
        usersAPI.follow(id)
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.setSpinner(false)
                    this.props.follow(id)
                }
            })
    }
    unfollow = (id) => {
        this.props.setSpinner(true)
        usersAPI.unfollow(id)
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.setSpinner(false)
                    this.props.unfollow(id)
                }
            })
    }
    componentDidMount() {
        if (!this.props.users.length) this.setPage(1);
    }
    setPage = (page) => {
        this.props.selectPage(page)
        this.props.setSpinner(true)
        this.lastPromice = page;
        usersAPI.setPage(page)
            .then(data => {
                if (page === this.lastPromice) {
                    this.props.setUsers(data)
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
            selectPage={this.setPage}
            totalPages={this.props.totalPages}
            unfollow={this.unfollow}
            follow={this.follow}
        />
    }
}
