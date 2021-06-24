import React from 'react';
import logoIcon from './../header-icon.svg';

function Header() {
    return (
        <header>
            <img src={logoIcon} width='40' alt='logo' />
            <p>Header</p>
            <p>Inform</p>
        </header>
    )
}
export default Header