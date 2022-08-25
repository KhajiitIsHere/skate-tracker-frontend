import React from "react";
import classes from './TrickLevel.module.css'

const TrickLevel = ({level, text, status, onMarkAsDone}) => {

    let lvlStatus = '';
    let lvlBadgeStatus = 'bg-dark';
    let currentLevel = true;

    if (status === 'PASSED') {
        lvlStatus = 'lvl-passed';
        lvlBadgeStatus = 'bg-success';
        currentLevel = false;
    } else if (status === 'NOT_REACHED') {
        lvlStatus = 'lvl-not-reached';
        lvlBadgeStatus = 'bg-secondary';
        currentLevel = false;
    }

    return (
        <li className={classes[lvlStatus]}>
            <span className={`badge ${lvlBadgeStatus}`}>Lvl {level}:</span>
            <b> {text}</b>
            {currentLevel && <button onClick={onMarkAsDone} className={`btn-sm btn-success ${classes['lvl-button']}`}>Mark as done</button>}
        </li>
    );
}

export default TrickLevel;