import React from 'react';
import classes from './styles/Header.module.css'
import logoIcon from './assets/header-icon.svg';

function Header() {
    return (
        <header className={classes.header}>
            <img src={logoIcon} alt='logo' className={classes.image}/>
            <p>Header</p>
            <p>Inform</p>
        </header>
    )
}
export default Header