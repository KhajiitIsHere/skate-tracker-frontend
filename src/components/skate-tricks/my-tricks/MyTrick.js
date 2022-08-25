import React from "react";
import classes from './MyTrick.module.css';
import Card from "../../UI/Card";
import {Link} from "react-router-dom";

const MyTrick = ({shortDescription, level, imgName, videoLink, lastTracked, title, trickId, onSelectTrick}) => {

    const trackProgressHandler = () => {
        onSelectTrick(trickId);
    }

    return (
        <Card className="row">
            <div className="col">
                <img alt={title} src={require(`../../../images/${imgName}`)} width="500px" />
            </div>
            <div className={`col ${classes['my-flex']}`}>
                <div className="d-flex justify-content-between align-items-center">
                    <h3>{title} </h3>
                    <Link to={`/video-tutorial/${trickId}`}><h5 className="text-secondary">(Watch video tutorial)</h5></Link>
                    <h4 className='text-secondary'>lvl: {level}</h4>
                </div>
                <p>
                    {shortDescription}
                </p>
                <div className="row">
                    <div className={`${classes['last-tracked']} col fst-italic`}>Last tracked {lastTracked}</div>
                    <button onClick={trackProgressHandler} className="col btn-dark align-self-end">Track progress</button>
                </div>
            </div>
        </Card>
    );
}

export default MyTrick;