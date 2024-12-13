import React from 'react';
import Navigation from './Navigation';
import '../styles/Header.css';

// This is our Header component. It will contain the title of our app and the Navigation component.

const Header = () => {
    return (
        <header className="header-container">
            <div className="header-left">
                <h1>GamerBud</h1>
            </div>
            <Navigation />
        </header>
    );
};

export default Header;