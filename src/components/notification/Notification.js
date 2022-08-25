import React from "react";
import classes from './Notification.module.css';

const Notification = () => {
    return (
        <div className={classes.notification}>
            <div>
                <h3>Trick mastered</h3>
            </div>
            <div>
                <p>
                    This trick won't be shown in "Tricks in progress" section anymore.<br/>
                    If you want to view the notes for this trick you can go to your profile.
                </p>
            </div>
        </div>
    )
}

export default Notification;