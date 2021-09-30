import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='nav-bar'>
            <Link to="/home">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Friends">Friends</Link>
            <Link to="/About/culture">Culture</Link>
        </div>
    );
};

export default Header;