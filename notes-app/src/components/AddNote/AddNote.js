import React, { useState } from "react";
import "./AddNote.css";
import { useMainContext } from "../../Context/Context";

const AddNote = () => {
    const { addNote, notes } = useMainContext();
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const charachterLimit = 200;
    const handleTitle = (event) => {
        charachterLimit - event.target.value.length >= 0 &&
            setTitle(event.target.value);
        const date = new Date();
        setDate(date.toLocaleDateString());
    };
    const handleSubmit = () => {
        title.trim() !== "" && date.trim() !== "" && addNote(title, date);
        setTitle("");
        setDate("");
    };
    return (
        <div className="add-note-container">
            <textarea
                className="add-note-body"
                type="text"
                placeholder="Type to add a note..."
                value={title}
                onChange={handleTitle}
            />
            <div className="add-note-footer d-flex justify-content-between align-items-center">
                <div className="note-charachters">
                    {charachterLimit - title.length} Remaining
                </div>
                <button className="btn save" onClick={handleSubmit}>
                    Save
                </button>
            </div>
        </div>
    );
};

export default AddNote;
