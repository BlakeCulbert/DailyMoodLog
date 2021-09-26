import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

const Navbar = () => {
    const navStyle = {
        color: 'white'
    };

    return (
        <nav>
            <h1>DailyMoodLog</h1>
            <ul className="nav-links">
                <Link style={navStyle} to="/">
                    <li>Home</li>
                </Link>
                <Link style={navStyle} to="/logmood">
                    <li>Log Mood</li>
                </Link>
                <Link style={navStyle} to="/profile">
                    <li>Profile</li>
                </Link>
                <Link style={navStyle} to="/login">
                    <li>Login</li>
                </Link>
            </ul>
        </nav>
    )
};

export default Navbar;