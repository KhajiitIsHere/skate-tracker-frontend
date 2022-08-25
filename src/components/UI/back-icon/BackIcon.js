import React from "react";
import classes from './BackIcon.module.css'
import {useNavigate} from "react-router-dom";

const BackIcon = () => {

    const navigate = useNavigate();

    return (
        <div className="py-5">
            <div className={classes.back}>
                <img onClick={() => navigate(-1)} alt='back icon' width="50px" src={require("../../../images/back.png")}/>
            </div>
        </div>
    );
}

export default BackIcon