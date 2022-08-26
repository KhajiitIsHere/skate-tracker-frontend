import React, {useState} from "react";

const NoteForm = ({onSaveNote, onCreateNote, viewingNote}) => {

    const [note, setNote] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const saveNoteHandler = (event) => {
        event.preventDefault();

        if (note === ''){
            setErrorMessage('Enter some text before submitting');
            return;
        }

        onSaveNote(note);

        setNote('');
    }

    const changeNoteHandler = (event) => {
        setErrorMessage('');
        setNote(event.target.value);
    }

    return (
        <div className="col mb-3">
            {errorMessage !== '' && <p className='text-danger mb-2'>{errorMessage}</p>}
            <form onSubmit={saveNoteHandler}>
                <textarea disabled={viewingNote !== null}  value={viewingNote === null ? note : viewingNote.text} onChange={changeNoteHandler} className='d-block mb-3' rows='8' cols='65'/>
                {viewingNote === null && <button type="submit" className="btn btn-dark">Save note</button>}
                {viewingNote !== null && <button onClick={onCreateNote} className="btn btn-secondary">Create note</button>}
            </form>
        </div>
    );
}

export default NoteForm;