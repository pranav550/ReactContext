import React from 'react';
import logo from './logo.jpg';
import './Style.css';

function Header() {
    return <div>
        <img src={logo} alt="logo" />
        <h2 className="title">Website</h2>

    </div>
}

export default Header;

