import React from 'react';
import c from './Header.module.css'
import logoIcon from './header-icon.svg';
import { NavLink } from 'react-router-dom';
import userPhotoHolder from '../../assets/ph/ava.jpg'


function Header(props) {
    console.log(props)
    return (
        <header className={c.header}>
            <img src={logoIcon} alt='logo' className={c.image} />

            {props.isAuth ?
                <div className={c.logined_user}>
                    <NavLink to={`/profile/${props.loginedUser.id}`}>
                        <div>{props.loginedUser.name}</div>
                    </NavLink>
                    <NavLink to={`/profile/${props.loginedUser.id}`}>
                        <div className={c.ava}>
                            {props.loginedUser.ava ?
                                <img src={props.loginedUser.ava} alt={`${props.loginedUser.name} avatar`} />
                                :
                                <img src={userPhotoHolder} alt={`${props.loginedUser.name} avatar`} />
                            }
                        </div>
                    </NavLink>
                </div>
                :
                <div className={c.login}>
                    <NavLink to={'/login'}>Login</NavLink>
                </div>
            }
        </header>
    )
}
export default Header