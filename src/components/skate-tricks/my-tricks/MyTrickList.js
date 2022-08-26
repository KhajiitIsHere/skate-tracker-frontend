import React from "react";
import MyTrick from "./MyTrick";
import useTricks from "../../../hooks/tricks-hook";
import {useNavigate} from "react-router-dom";

const MyTrickList = props => {

    const {myTricks} = useTricks();
    const navigate = useNavigate();

    const selectTrickHandler = (trickId) => {
        navigate(`/my-tricks/${trickId}`);
    }

    if (myTricks === null) {
        return <h4 className="text-center p-5">Loading...</h4>
    }

    if (myTricks.length !== 0) {
        return (
            <div className="container">
                {myTricks.map(trick =>
                    <MyTrick
                        key={trick.id}
                        trickId={trick.id}
                        level={trick.level}
                        shortDescription={trick.shortDescription}
                        title={trick.title}
                        imgName={trick.imgName}
                        videoLink={trick.videoLink}
                        lastTracked={trick.lastTracked}
                        onSelectTrick={selectTrickHandler}
                    />
                )}
            </div>
        );
    } else {
        return <h4 className="text-center p-5">No tricks in progress</h4>
    }
}

export default MyTrickList