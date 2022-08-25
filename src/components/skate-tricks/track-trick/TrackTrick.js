import React from "react";
import BackIcon from "../../UI/back-icon/BackIcon";
import TrickLevelList from "../../levels/TrickLevelList";
import Notes from "../../notes/Notes";
import Notification from "../../notification/Notification";


const TrackTrick = ({trick, onAddNote, onIncreaseLevel}) => {
    if(trick !== null) {
        return (
            <div className='container'>
                {trick.currentLevel > trick.levels.length && <Notification/>}
                <div className='d-flex align-items-center'>
                    <BackIcon />
                    <h3 className='ms-5'>
                        Tracking:
                        <span className='ms-3'>{trick.title}</span>
                    </h3>
                </div>

                <TrickLevelList currentLevel={trick.currentLevel} levels={trick.levels}
                                onIncreaseLevel={onIncreaseLevel}/>

                <Notes isForViewNote={false} onAddNote={onAddNote} notes={trick.notes}/>
            </div>
        );
    }
    else {
        return <div>Loading...</div>
    }
}

export default TrackTrick;