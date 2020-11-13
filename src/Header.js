import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Link to="/"><h1> Book Search</h1></Link>

            <Link to="/saved">Saved Books</Link>

        </header>
    );
}

export default Header;
