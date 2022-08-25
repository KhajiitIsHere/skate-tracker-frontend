import React from "react";
import TrickLevel from "./TrickLevel";
import classes from './TrickLevelList.module.css'


const TrickLevelList = ({levels, currentLevel, onIncreaseLevel}) => {

    const startLevel = Math.max(currentLevel - 3, 0) - Math.max(2 - (levels.length - currentLevel), 0);
    const endLevel = Math.min(currentLevel + 1, levels.length - 1) + Math.max(3 - currentLevel, 0);

    const displayLevels = levels
        .map((level, idx) => {
            return {level, idx}
        })
        .filter(elm => elm.idx >= startLevel && elm.idx <= endLevel)
        .map(elm => {
            let status = 'CURRENT';
            if (elm.idx < currentLevel - 1)
                status = 'PASSED'
            else if (elm.idx > currentLevel - 1)
                status = 'NOT_REACHED'
            return <TrickLevel
                key={elm.idx + 1}
                onMarkAsDone={onIncreaseLevel}
                level={elm.idx + 1}
                status={status}
                text={elm.level.text} />
        })

    return (
        <div className={`py-5 ${classes['line-height']} mb-3`}>
            <ul className="list-unstyled">
                {displayLevels}
            </ul>
        </div>
    );

}

export default TrickLevelList;