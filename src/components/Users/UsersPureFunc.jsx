import React from 'react'
import { NavLink } from 'react-router-dom'
import c from './Users.module.css'
import userPhotoHolder from '../../assets/ph/ava.jpg'
import spinner from '../../assets/spinner.gif';


export default function UsersPureFunc(props){
    return <React.Fragment>
            {props.spinner ? <img src={spinner} alt='loading' className={c.spinner}></img> : ''}
            <div className={c.pagination_wrapper}>
                {props.currentPage === 1 ?
                    <React.Fragment>
                        <div title='to first page'>{'|<'}</div>
                        <div title='to previous page'>{'<'}</div>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <div title='to first page'
                            onClick={() => props.selectPage(1)}
                            className={c.clickable}>{'|<'}</div>
                        <div title='to previous page'
                            onClick={() => props.selectPage(props.currentPage - 1)}
                            className={c.clickable}>{'<'}</div>
                    </React.Fragment>
                }

                {props.pagination ?
                   props.pagination.map(n => {
                        if (n > 0 && (n <= props.totalPages || props.totalPages === undefined)) {
                            return (n !== props.currentPage ?
                                <div key={n}
                                    className={c.clickable}
                                    onClick={() => props.selectPage(n)}
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
                {props.currentPage === props.totalPages ?
                    <React.Fragment>
                        <div title='to next page'>{'>'}</div>
                        <div title='to last page'>{'>|'}</div>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <div title='to next page'
                            onClick={() => props.selectPage(props.currentPage + 1)}
                            className={c.clickable}>{'>'}</div>
                        <div title='to last page'
                            onClick={() => props.selectPage(props.totalPages)}
                            className={c.clickable}>{'>|'}</div>
                    </React.Fragment>
                }
            </div>
            <div className={c.main_wrapper}>
                {props.spinner ? <div className={c.blackout} /> : ''}
                <div className={c.user_list_wrapper}>
                    <div className={c.user_list}>
                        {props.users.map(a => <div className={c.item} key={a.id}>
                            <div className={c.name}>{a.name}</div>
                            <NavLink className={c.ava} to={`/profile/${a.id}`}>
                                <div>
                                    <img src={a.photos.large || userPhotoHolder} alt="" />
                                </div>
                            </NavLink>
                            {a.followed ?
                                <div
                                    className={`${c.follow_button} ${c.unfollow}`}
                                    onClick={() => props.unfollow(a.id)}
                                >
                                    unfollow
                                </div>
                                :
                                <div
                                    className={`${c.follow_button} ${c.follow}`}
                                    onClick={() => props.follow(a.id)}
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
}
