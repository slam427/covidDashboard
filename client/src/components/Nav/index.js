import React from 'react';
import { Link } from "react-router-dom";
import './style.css';

function Nav() {
    return (
        <header>
        <nav>
            <div className="nav-wrapper">
                <a href="/home" className="brand-logo">Covid-19 Dashboard</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/mypage">MyPage</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>

                </ul>
            </div>
        </nav>
        </header>
    )
}

export default Nav;