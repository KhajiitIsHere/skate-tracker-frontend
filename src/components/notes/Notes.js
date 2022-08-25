import React, {useState} from "react";
import NoteForm from "./NoteForm";
import NotesHistory from "./NotesHistory";
import ViewANote from "./ViewANote";

const Notes = ({onAddNote, notes, isForViewNote}) => {

    const [viewingNote, setViewingNote] = useState(null);

    const viewNoteHandler = (noteId) => {
        setViewingNote(notes.find(note => note.id === noteId))
    }

    const createNoteHandler = () => {
        setViewingNote(null);
    }

    return (
        <div className="row">
            {!isForViewNote && <NoteForm onSaveNote={onAddNote} viewingNote={viewingNote} onCreateNote={createNoteHandler}/>}
            {isForViewNote && <ViewANote viewingNote={viewingNote}/>}
            <NotesHistory notes={notes} onViewNote={viewNoteHandler}/>
        </div>
    );
}

export default Notes;