import React from "react";
import Prerequisite from "./Prerequisite";
import classes from './SkateTrick.module.css'
import Card from "../../UI/Card";

const SkateTrick = ({shortDescription, imgName, prerequisites, title, trickId, onTrackTrick}) => {

    const canLearn = prerequisites.map(pre => pre.isKnown).reduce((prev, curr) => prev && curr, true);

    const checkIcon = canLearn ? 'check-icon.png' : 'x-icon.webp'

    const prerequisiteComponents = prerequisites.map(prerequisite =>
        <Prerequisite
            key={prerequisite.name}
            name={prerequisite.name}
            isKnown={prerequisite.isKnown}/>)

    const startTrackingHandler = () => {
        onTrackTrick(trickId);
    }

    return (
        <Card className="row">
            <div className="col">
                <img alt={title} src={require(`../../../images/${imgName}`)} width="500px"/>
            </div>
            <div className={`col ${classes['my-flex']}`}>
                <div>
                    <div className={classes['trick-header']}>
                        <div>
                            <h3>{title}</h3>
                            Prerequisites: {prerequisiteComponents}
                        </div>
                        <div className={classes['can-learn-icon']}>
                            <img alt='check-icon' width="50px" height="50px" src={require(`../../../images/${checkIcon}`)}/>
                            <h5>{canLearn ? 'Ready to learn' : 'Not ready to learn'}</h5>
                        </div>
                    </div>
                </div>
                <p>
                    {shortDescription}
                </p>
                <div className="row">
                    <button onClick={startTrackingHandler} disabled={!canLearn} className={`col ${canLearn ? 'btn-dark' : 'btn-light'}`}>Start Tracking</button>
                </div>
            </div>
        </Card>
    );
}

export default SkateTrick;