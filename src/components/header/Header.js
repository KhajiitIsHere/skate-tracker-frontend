import React from "react";
import classes from './Header.module.css'
import {Link, useLocation} from "react-router-dom";
import ProfileButton from "../profile/ProfileButton";
import LoginLink from "./LoginLink";
import {useUser} from "../../store/user-context";
import HeaderButton from "./HeaderButton";

const Header = () => {

    const {username} = useUser();
    const location = useLocation().pathname;

    return <div className={`${classes.header} p-3 d-flex justify-content-between`}>
        <h1>Skate Tracker</h1>
        <ul className="nav justify-content-end align-items-center">
            <li className="nav-item">
                <HeaderButton toPath="/all-tricks" text="All Tricks" isActive={location.startsWith("/all-tricks")} />
            </li>
            <li className="nav-item">
                <HeaderButton toPath="/my-tricks" text="Tricks in progress" isActive={location.startsWith("/my-tricks")} />
            </li>
            <li>
                <LoginLink isLoggedIn={username !== ''} />
            </li>
            <li>
                <Link className="nav-link text-light" to='/profile'><ProfileButton username={username} /></Link>
            </li>
        </ul>
    </div>
}

export default Header;