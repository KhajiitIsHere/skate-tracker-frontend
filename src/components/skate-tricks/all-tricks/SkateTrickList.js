import React from "react";
import SkateTrick from "./SkateTrick";
import useTricks from "../../../hooks/tricks-hook";

const SkateTrickList = (props) => {

    const {allTricks, trackTrick} = useTricks();

    const trackTrickHandler = (trickId) => {
        trackTrick(+trickId);
    }

    if (allTricks === null) {
        return <h4 className="text-center p-5">Loading...</h4>
    }
    if (allTricks.length !== 0) {
        return (
            <div className="container">
                {allTricks.map(trick =>
                    <SkateTrick
                        key={trick.id}
                        trickId={trick.id}
                        title={trick.title}
                        prerequisites={trick.prerequisites}
                        imgName={trick.imgName}
                        shortDescription={trick.shortDescription}
                        onTrackTrick={trackTrickHandler}
                    />
                )}
            </div>
        )
    } else {
        return <h4 className="text-center p-5">No untracked tricks</h4>
    }
}

export default SkateTrickList;