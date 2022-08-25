import React from "react";
import classes from "./HeaderButton.module.css";
import {Link} from "react-router-dom";

const HeaderButton = ({isActive, text, toPath}) => {

    return (
        <Link to={toPath} className="nav-link text-light position-relative">
            <b className={isActive ? classes['active-text'] : ''}>{text}</b>
            {isActive && <div className={classes.underline} />}
        </Link>
    )
}

export default HeaderButton