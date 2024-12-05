import React from 'react';
import Navigation from './Navigation';

// This is our Header component. It will contain the title of our app and the Navigation component.

const Header = () => {
    return (
        <header>
            <h1>GamerBud</h1>
            <div className="search-bar">
                <imput type="text" placeholder="Search..." />
                <button type="submit">Search</button>
            </div>
            <Navigation />
        </header>
    );
};

export default Header;