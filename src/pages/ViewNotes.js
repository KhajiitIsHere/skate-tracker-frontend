import React, {useEffect} from "react";
import BackIcon from "../components/UI/back-icon/BackIcon";
import Notes from "../components/notes/Notes";
import useTricks from "../hooks/tricks-hook";
import {useParams} from "react-router-dom";

const ViewNotes = () => {

    const {selectedTrick, selectTrick} = useTricks();
    const params = useParams();

    useEffect(() => {
        const trickId = params.trickId;

        selectTrick(trickId);
    }, [params.trickId, selectTrick])

    if (selectedTrick !== null) {
        return (
            <div className='container'>
                <div className='d-flex align-items-center'>
                    <BackIcon/>
                    <h3 className='ms-5'>
                        Notes for:
                        <span className='ms-3'>{selectedTrick.title}</span>
                    </h3>
                </div>

                <Notes isForViewNote={true} notes={selectedTrick.notes}/>
            </div>
        );
    }
    else {
        return <h3>Loading...</h3>
    }
}

export default ViewNotes;