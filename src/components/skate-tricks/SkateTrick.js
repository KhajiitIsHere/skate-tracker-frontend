import React from "react";
import Prerequisite from "./Prerequisite";
import classes from './SkateTrick.module.css'

const SkateTrick = ({shortDescription, imgName, prerequisites, title}) => {

    const canLearn = prerequisites.map(pre => pre.isKnown).reduce((prev, curr) => prev && curr, true);

    const checkIcon = canLearn ? 'check-icon.png' : 'x-icon.webp'

    const prerequisiteComponents = prerequisites.map(prerequisite => <Prerequisite name={prerequisite.name}
                                                                                   isKnown={prerequisite.isKnown}/>)

    return (
        <div className="row">
            <div className="col">
                <img src={require(`../../images/${imgName}`)} width="500px"/>
            </div>
            <div className={`col ${classes['my-flex']}`}>
                <div>
                    <div className={classes['trick-header']}>
                        <div>
                            <h3>{title}</h3>
                            Prerequisites: {prerequisiteComponents}
                        </div>
                        <div className={classes['can-learn-icon']}>
                            <img width="50px" height="50px" src={`../../images/${checkIcon}`}/>
                            <h5>{canLearn ? 'Ready to learn' : 'Not ready to learn'}</h5>
                        </div>
                    </div>
                </div>
                <p>
                    {shortDescription}
                </p>
                <div className="row">
                    <button className="col btn-dark"><a href="#">Start Learning</a></button>
                </div>
            </div>
        </div>
    );
}

export default SkateTrick;