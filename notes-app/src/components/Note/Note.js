import React from "react";
import "./Note.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useMainContext } from "../../Context/Context";

const Note = ({ title, date, id }) => {
    const { deleteNote } = useMainContext();
    const handleDelete = (id) => {
        deleteNote(id);
    };
    return (
        <div className="note-container">
            <span className="note-body">
                <p>{title}</p>
            </span>
            <div className="note-footer d-flex justify-content-between align-items-center">
                <div className="note-date">{date}</div>
                <div>
                    <FontAwesomeIcon
                        onClick={() => {
                            handleDelete(id);
                        }}
                        className="note-delete-icon"
                        icon={faTrash}
                    />
                </div>
            </div>
        </div>
    );
};

export default Note;
