import React from 'react';
import { Link } from "react-router-dom";

function Nav(props) {

    return (
        <nav>
            <ul className="flex-row">
                <li className="mx-2">
                    <Link to="/about">About Me</Link>
                </li>
                <li className="mx-2">
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li className="mx-2">
                    <Link to="/contact">Contact</Link>
                    {/* <a href = "/contact" className = "nav">Contact</a> */}
                </li>
                <li className="mx-2">
                    <Link to="/resume">Resume</Link>
                    {/* <a href = "/resume" className = "nav">Resume</a> */}
                </li>
            </ul>
        </nav>

    );
}

export default Nav;