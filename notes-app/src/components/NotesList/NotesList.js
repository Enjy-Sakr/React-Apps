import React, { useState } from "react";
import Note from "../Note/Note";
import "./NotesList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AddNote from "../AddNote/AddNote";
import { useMainContext } from "../../Context/Context";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const NotesList = () => {
    const [searchText, setSearchText] = useState("");
    const { notes } = useMainContext();
    const handleSearch = (event) => {
        setSearchText(event.target.value);
    };
    return (
        <div className="notes-list row justify-content-center">
            <div className="search mb-4 w-100 position-relative">
                <FontAwesomeIcon
                    className="search-icon text-black-50 position-absolute"
                    icon={faMagnifyingGlass}
                />
                <input
                    value={searchText}
                    onChange={handleSearch}
                    type="search"
                    className="w-100 rounded"
                    placeholder="Search"
                />
            </div>
            <Row>
                {notes.length > 0 &&
                    notes
                        .filter((note) =>
                            note.title
                                .toLowerCase()
                                .includes(searchText.toLowerCase())
                        )
                        .map((item) => {
                            return (
                                <Col
                                    className="col-of-all"
                                    sm={12}
                                    md={6}
                                    lg={3}
                                    key={item.id}
                                >
                                    <Note
                                        title={item.title}
                                        date={item.date}
                                        id={item.id}
                                    />
                                </Col>
                            );
                        })}
                <Col sm={12} md={6} lg={3}>
                    <AddNote />
                </Col>
            </Row>
        </div>
    );
};

export default NotesList;
