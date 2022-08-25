import React from "react";
import NoteHistoryInstance from "./NoteHistoryInstance";
import classes from './NotesHistory.module.css';

const NotesHistory = ({notes, onViewNote}) => {
    return (
        <div className={`col ${classes.notes}`}>
            {notes.map(note =>
                <NoteHistoryInstance key={note.id} noteId={note.id} date={note.date} onViewNote={onViewNote} />
            )}
        </div>
    );
}

export default NotesHistory