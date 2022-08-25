import React from "react";
import NoteHistoryDate from "./NoteHistoryDate";
import classes from './NoteHistoryInstance.module.css';

const NoteHistoryInstance = ({date, noteId, onViewNote}) => {

    const viewNoteHandler = () => {
        onViewNote(noteId);
    }

    return (
      <div className={'mb-2'}>
          <NoteHistoryDate date={date} />
          <span onClick={viewNoteHandler} className={`text-muted ${classes['view-button']}`}>view note...</span>
      </div>
    );
}

export default NoteHistoryInstance;