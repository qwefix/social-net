import React from 'react'
import { NavLink } from 'react-router-dom'
import c from './Users.module.css'
import userPhotoHolder from '../../assets/ph/ava.jpg'
import Spinner from '../common/Spinner/Spinner';

export default function UsersPureFunc(props){
    return <React.Fragment>
            <div className={c.pagination_wrapper}>
                {props.currentPage === 1 ?
                    <>
                        <div title='to first page'>{'|<'}</div>
                        <div title='to previous page'>{'<'}</div>
                    </>
                    :
                    <>
                        <div title='to first page'
                            onClick={() => props.selectPage(1)}
                            className={c.clickable}>{'|<'}</div>
                        <div title='to previous page'
                            onClick={() => props.selectPage(props.currentPage - 1)}
                            className={c.clickable}>{'<'}</div>
                    </>
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
                    : null
                }
                {props.currentPage === props.totalPages ?
                    <>
                        <div title='to next page'>{'>'}</div>
                        <div title='to last page'>{'>|'}</div>
                    </>
                    :
                    <>
                        <div title='to next page'
                            onClick={() => props.selectPage(props.currentPage + 1)}
                            className={c.clickable}>{'>'}</div>
                        <div title='to last page'
                            onClick={() => props.selectPage(props.totalPages)}
                            className={c.clickable}>{'>|'}</div>
                    </>
                }
            </div>
            <div className={c.main_wrapper}>
                {props.spinner ? <Spinner/> : null}
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
