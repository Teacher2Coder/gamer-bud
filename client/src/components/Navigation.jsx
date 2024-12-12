import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css';

// This is our Navigation component. We will have all of our page links here so that the user can navigate through the app.

const Navigation = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><NavLink to ="/" end>Home</NavLink></li>
                <li><NavLink to ="/signup">Sign Up</NavLink></li>
                <li><NavLink to ="/login">Login</NavLink></li>
                <li><NavLink to ="/profile">Profile</NavLink></li>
                <li><NavLink to ="/gamelibrary">Game Library</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navigation;