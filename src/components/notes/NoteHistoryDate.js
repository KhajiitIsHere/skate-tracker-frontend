import React from "react";

const NoteHistoryDate = ({date}) => {

    const month = date.getMonth() < 9 ? `0${date.getMonth() + 1}` : (date.getMonth() + 1).toString();
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate().toString();
    const year = date.getFullYear();
    const hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours().toString();
    const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes().toString();

    return (
        <span className='me-3'>{day}/{month}/{year}-{hour}:{minutes}</span>
    );

}

export default NoteHistoryDate