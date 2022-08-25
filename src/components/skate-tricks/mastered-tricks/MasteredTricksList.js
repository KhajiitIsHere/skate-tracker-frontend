import React from "react";
import MasteredTrick from "./MasteredTrick";
import useTricks from "../../../hooks/tricks-hook";
import {useNavigate} from "react-router-dom";

const MasteredTricksList = () => {

    const {masteredTricks, selectTrick} = useTricks();
    const navigate = useNavigate();

    const viewNotesHandler = (trickId) => {
        selectTrick(trickId);
        navigate(`/notes/${trickId}`)
    }

    if(masteredTricks.length !== 0) {
        return (
            <div>
                <h2 className='mb-5'>Mastered Tricks</h2>
                {masteredTricks.map(trick =>
                    <MasteredTrick
                            key={trick.trickId}
                            trickId={trick.trickId}
                            title={trick.title}
                            imgName={trick.imgName}
                            onViewNotes={viewNotesHandler}
                        />

                )}
            </div>
        )
    }
    else{
        return <div className='mt-5'>No tricks mastered yet</div>
    }
}

export default MasteredTricksList;