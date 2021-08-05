import React from 'react'
import { NavLink } from 'react-router-dom'
import c from './Users.module.css'

export default function Users({ users, addUsers, follow, unfollow }) {
    if (users.length === 0) {
        addUsers([
            {
                id: 1,
                name: "General grievous",
                ava: require(`../../redux/1/ava.jpg`).default,
                status: "boss of this gym",
                location: {
                    city: 'Minsk',
                    country: 'Belarus'
                },
                followed: false,
            },
            {
                id: 2,
                name: "General Kenobi",
                ava: require(`../../redux/2/ava.jpg`).default,
                status: 'Best teacher',
                location: {
                    city: 'Moscow',
                    country: 'Russia'
                },
                followed: true,
            },
            {
                id: 10,
                name: "User Placeholder",
                ava: require(`../../redux/ph/ava.jpg`).default,
                status: "one of empty users",
                location: {
                    city: 'city',
                    country: 'country'
                },
                followed: false,
            },
            {
                id: 11,
                name: "User Placeholder",
                ava: require(`../../redux/ph/ava.jpg`).default,
                status: "one of empty users",
                location: {
                    city: 'city',
                    country: 'country'
                },
                followed: false,
            },
        ])
    }
    return (
        <div className={c.user_list}>
            {users.map(a => <div className={c.item} key={a.id}>
                <div className={c.name}>{a.name}</div>
                <NavLink className={c.ava} to={`/profile/${a.id}`}>
                    <div>
                        <img src={a.ava} alt="" />
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
                    <div>{a.location.city}</div>
                    <div>{a.location.country}</div>
                </div>
                <div className={c.status}>
                    {a.status}
                </div>
            </div>)}
        </div>
    )
}