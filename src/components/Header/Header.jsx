import React from 'react';
import c from './Header.module.css'
import logoIcon from './header-icon.svg';

function Header() {
    return (
        <header className={c.header}>
            <img src={logoIcon} alt='logo' className={c.image}/>
            <p>Header</p>
            <p>Inform</p>
        </header>
    )
}
export default Header