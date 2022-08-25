import React from "react";
import classes from './MiniCard.module.css'

const MiniCard = props => {
    return <div className={`${classes.card} ${props.className}`}>{props.children}</div>
}

export default MiniCard;