import React from "react";

const ViewANote = ({viewingNote}) => {

    return (
        <div className="col">
            <textarea disabled value={viewingNote === null ? 'Select a note' : viewingNote.text}
                      className='d-block mb-3' rows='8' cols='65'/>
        </div>
    );
}

export default ViewANote;