import React from "react";
import MiniCard from "../../UI/MiniCard";

const MasteredTrick = ({trickId, title, imgName, onViewNotes}) => {

    const viewNotesHandler = () => {
        onViewNotes(trickId);
    }

    return (
        <div>
            <MiniCard className="d-flex align-items-center justify-content-between">
                <img height={90} width={150} alt={title} src={require(`../../../images/${imgName}`)} />
                <h4>{title}</h4>
                <button onClick={viewNotesHandler} className="btn btn-light">View notes</button>
            </MiniCard>

        </div>
    )
}

export default MasteredTrick;