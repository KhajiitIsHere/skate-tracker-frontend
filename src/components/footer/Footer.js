import React from "react";
import classes from './Footer.module.css'

const Footer = () => {
    return (
        <div className={`${classes.footer} p-4 d-flex flex-column align-items-center`}>
            <p className="mb-2">For help contact me via email</p>
            <p className="m-0"><a href="mailto: filip.shijakov@students.finki.ukim.mk" className="text-info">filip.shijakov@students.finki.ukim.mk</a></p>
        </div>
    )
}

export default Footer;