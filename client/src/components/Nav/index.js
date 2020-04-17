import React from 'react';
import { Link } from "react-router-dom";
import './style.css';

function Nav() {
    return (
        <nav>
            <div class="nav-wrapper">
                <a href="/home" class="brand-logo">Covid-19 Dashboard</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/mypage">MyPage</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>

                </ul>
            </div>
        </nav>
    )
}

export default Nav;