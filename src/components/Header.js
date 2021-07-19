import React from 'react';
import headerLogo from './../images/logoMesto.svg';

export default function Header() {
    return (
        <header className="header">
            <img src={headerLogo} alt="Логотип сайта место" className="header__logo" />
        </header>
    );
}