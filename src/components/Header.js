import React from "react";
import classes from './Header.module.css'

const Header = () => {
    return <div className={`${classes.header} p-3 row`}>
        <h1 className="col">All Tricks</h1>
        <ul className="nav col justify-content-end align-items-center">
            <li className="nav-item">
                <a className="nav-link text-light" href='#'>All Tricks</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-light" href='#' aria-current="page">My tricks</a>
            </li>
        </ul>
    </div>
}

export default Header;