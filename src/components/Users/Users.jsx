import * as axios from 'axios'
import React from 'react'
import { NavLink } from 'react-router-dom'
import c from './Users.module.css'
import userPhotoHolder from '../../assets/ph/ava.jpg'

export default class Users extends React.Component {
    getFirstPage = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=1&count=4`)
            .then(response => {
                this.props.addUsers(response.data.items, 1, Math.ceil(response.data.totalCount / 4));
            });
    }
    getPage = (page) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=4`)
            .then(response => {
                this.props.addUsers(response.data.items, page, Math.ceil(response.data.totalCount / 4));
            });
    }
    componentDidMount() {
        if (!this.props.currentPage) this.getFirstPage();
    }

    render() {
        return (
            <React.Fragment>
                <div className={c.pagination_wrapper}>
                    {this.props.currentPage === 1 ?
                        <React.Fragment>
                            <div title='to first page'>{'|<'}</div>
                            <div title='to previous page'>{'<'}</div>
                        </React.Fragment>
                        :
                        <React.Fragment>
                            <div title='to first page'
                                onClick={() => this.getPage(1)}
                                className={c.clickable}>{'|<'}</div>
                            <div title='to previous page'
                                onClick={() => this.getPage(this.props.currentPage - 1)}
                                className={c.clickable}>{'<'}</div>
                        </React.Fragment>
                    }

                    {this.props.pagination ?
                        this.pagination = this.props.pagination.map(n => {
                            if (n > 0 && n <= this.props.totalPages) {
                                return (n !== this.props.currentPage ?
                                    <div key={n}
                                        className={c.clickable}
                                        onClick={() => this.getPage(n)}
                                    >
                                        {n}
                                    </div>
                                    :
                                    <div key={n} className={c.current}>{n}</div>)
                            }
                            return <div key={n} />
                        })
                        : ""
                    }
                    {this.props.currentPage === this.props.totalPages ?
                        <React.Fragment>
                            <div title='to next page'>{'>'}</div>
                            <div title='to last page'>{'>|'}</div>
                        </React.Fragment>
                        :
                        <React.Fragment>
                            <div title='to next page'
                                onClick={() => this.getPage(this.props.currentPage + 1)}
                                className={c.clickable}>{'>'}</div>
                            <div title='to last page'
                                onClick={() => this.getPage(this.props.totalPages)}
                                className={c.clickable}>{'>|'}</div>
                        </React.Fragment>
                    }
                </div>
                <div className={c.main_wrapper}>
                    <div className={c.user_list_wrapper}>
                        <div className={c.user_list}>
                            {this.props.users.map(a => <div className={c.item} key={a.id}>
                                <div className={c.name}>{a.name}</div>
                                <NavLink className={c.ava} to={`/profile/${a.id}`}>
                                    <div>
                                        <img src={a.photos.large || userPhotoHolder} alt="" />
                                    </div>
                                </NavLink>
                                {a.followed ?
                                    <div
                                        className={`${c.follow_button} ${c.unfollow}`}
                                        onClick={() => this.props.unfollow(a.id)}
                                    >
                                        unfollow
                                    </div>
                                    :
                                    <div
                                        className={`${c.follow_button} ${c.follow}`}
                                        onClick={() => this.props.follow(a.id)}
                                    >
                                        Follow
                                    </div>}
                                <div className={c.location}>
                                    <div>{'a.location.city'}</div>
                                    <div>{'a.location.country'}</div>
                                </div>
                                <div className={c.status}>
                                    {a.status}
                                </div>
                            </div>)}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
