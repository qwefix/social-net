import * as axios from 'axios'
import React from 'react'
import { NavLink } from 'react-router-dom'
import c from './Users.module.css'
import userPhotoHolder from '../../assets/ph/ava.jpg'

export default function Users({ users, addUsers, follow, unfollow }) {
    if (users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response=>{
            addUsers(response.data.items)
        })
    }
    return (
        <div className={c.user_list}>
            {users.map(a => <div className={c.item} key={a.id}>
                <div className={c.name}>{a.name}</div>
                <NavLink className={c.ava} to={`/profile/${a.id}`}>
                    <div>
                        <img src={a.photos.large || userPhotoHolder} alt="" />
                    </div>
                </NavLink>
                {a.followed ?
                    <div
                        className={`${c.follow_button} ${c.unfollow}`}
                        onClick={() => unfollow(a.id)}
                    >
                        unfollow
                    </div>
                    :
                    <div
                        className={`${c.follow_button} ${c.follow}`}
                        onClick={() => follow(a.id)}
                    >
                        Follow
                    </div>}
                <div
                    className={`${c.follow_button} ${a.followed ? c.unfollow : c.follow}`}
                    onClick={a.followed ? () => unfollow(a.id) : () => follow(a.id)}
                >
                    {a.followed ? 'unfollow' : 'Follow'}
                </div>
                <div className={c.location}>
                    <div>{'a.location.city'}</div>
                    <div>{'a.location.country'}</div>
                </div>
                <div className={c.status}>
                    {a.status}
                </div>
            </div>)}
        </div>
    )
}