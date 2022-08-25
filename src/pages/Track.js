import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import TrackTrick from "../components/skate-tricks/track-trick/TrackTrick";
import useTricks from "../hooks/tricks-hook";

const Track = (props) => {
    const params = useParams()
    const {selectedTrick, increaseTrickLevel, addNoteToTrick, selectTrick} = useTricks();

    useEffect(() => {
        const trickId = params.trickId;

        selectTrick(trickId);
    }, [params.trickId, selectTrick])


    const increaseLevelHandler = () => {
        increaseTrickLevel(selectedTrick.trickId);
    }

    const addNoteHandler = noteText => {
        addNoteToTrick(selectedTrick.trickId, noteText);
    }

    return (
        <TrackTrick trick={selectedTrick} onAddNote={addNoteHandler} onIncreaseLevel={increaseLevelHandler} />
    )
}

export default Track