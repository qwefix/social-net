import React from 'react';
import UsersPureFunc from './UsersPureFunc';
import * as axios from 'axios';
import responseSettings from '../../responceSettings.json'

export default class UsersClass extends React.Component {
    follow = (id) => {
        this.props.setSpinner(true)
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {},responseSettings )
            .then(response => {
                if (response.data.resultCode===0) {
                    this.props.setSpinner(false)
                    this.props.follow(id)
            }})
    }
    unfollow = (id) => {
        this.props.setSpinner(true)
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,responseSettings )
            .then(response => {
                if (response.data.resultCode===0) {
                    this.props.setSpinner(false)
                    this.props.unfollow(id)
            }})
    }
    componentDidMount() {
        if (!this.props.users.length) this.setPage(1);
    }
    setPage = (page) => {
        this.props.selectPage(page)
        this.props.setSpinner(true)
        this.lastPromice = page;
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=10`,{"withCredentials": true ,})
            .then(response => {
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
            selectPage={this.setPage}
            totalPages={this.props.totalPages}
            unfollow={this.unfollow}
            follow={this.follow}
        />
    }
}
