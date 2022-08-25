import React, {useState} from "react";

const NoteForm = ({onSaveNote, onCreateNote, viewingNote}) => {

    const [note, setNote] = useState('');

    const saveNoteHandler = (event) => {
        event.preventDefault();

        onSaveNote(note);

        setNote('');
    }

    const changeNoteHandler = (event) => {
        setNote(event.target.value);
    }

    return (
        <div className="col">
            <form onSubmit={saveNoteHandler}>
                <textarea disabled={viewingNote !== null}  value={viewingNote === null ? note : viewingNote.text} onChange={changeNoteHandler} className='d-block mb-3' rows='8' cols='65'/>
                {viewingNote === null && <button type="submit" className="btn btn-dark">Save note</button>}
                {viewingNote !== null && <button onClick={onCreateNote} className="btn btn-secondary">Create note</button>}
            </form>
        </div>
    );
}

export default NoteForm;