import * as axios from 'axios'
import React from 'react'
import { NavLink } from 'react-router-dom'
import c from './Users.module.css'
import userPhotoHolder from '../../assets/ph/ava.jpg'

export default class Users extends React.Component {
    getUsers=()=> {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    this.props.addUsers(response.data.items)
                });
    }
    componentDidMount(){
        this.getUsers();
    }
    
    render() {
        return (
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
            <div className={c.get_users_wrapper}>
                <div onClick={this.getUsers}>Get users</div>
            </div>
        </div>
        )
    }
}
