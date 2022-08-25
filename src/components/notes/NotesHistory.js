import React from "react";
import NoteHistoryInstance from "./NoteHistoryInstance";

const NotesHistory = ({notes, onViewNote}) => {
    return (
        <div className='col'>
            {notes.map(note =>
                <NoteHistoryInstance key={note.id} noteId={note.id} date={note.date} onViewNote={onViewNote} />
            )}
        </div>
    );
}

export default NotesHistory