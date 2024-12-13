import { NavLink } from 'react-router-dom';
import Auth from '../utils/auth';
import '../styles/Navigation.css';

// This is our Navigation component. We will have all of our page links here so that the user can navigate through the app.

const Navigation = () => {

    const handleLogout = (e) => {
        e.preventDefault();
        Auth.logout();
    }

    return (
        <nav className="navbar">
            <ul>
                <li><NavLink to ="/" end>Home</NavLink></li>
                {Auth.loggedIn ? (
                    <li><NavLink onClick={handleLogout}>Logout</NavLink></li>
                ) : (
                    <div>
                        <li><NavLink to ="/signup">Sign Up</NavLink></li>
                        <li><NavLink to ="/login">Login</NavLink></li>
                    </div>
                )}
                <li><NavLink to ="/myprofile">Profile</NavLink></li>
                <li><NavLink to='/posts'>Buddy Posts</NavLink></li>
                <li><NavLink to ="/gamelibrary">Game Library</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navigation;