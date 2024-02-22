import { createContext, useContext, useState } from "react";
import { nanoid } from "nanoid";
export const MainContext = createContext();
export const ContextProvider = ({ children }) => {
    const [notes, setNotes] = useState(
        localStorage.notes ? JSON.parse(localStorage.notes) : []
    );
    const addNote = (title, date) => {
        setNotes([...notes, { id: nanoid(), title: title, date: date }]);
    };
    const deleteNote = (id) => {
        setNotes(
            notes.filter((item) => {
                return item.id !== id;
            })
        );
    };
    localStorage.setItem("notes", JSON.stringify(notes));
    return (
        <MainContext.Provider value={{ notes, addNote, deleteNote }}>
            {children}
        </MainContext.Provider>
    );
};

export const useMainContext = () => {
    return useContext(MainContext);
};
