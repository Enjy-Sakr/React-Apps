import React, { useEffect, useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    const [modeIcon, setModeIcon] = useState();
    localStorage.mode
        ? document.body.classList.add("black-mode")
        : document.body.classList.remove();
    const pageMood = () => {
        document.body.classList.toggle("black-mode");
        localStorage.setItem("mode", document.body.className);
        localStorage.mode ? setModeIcon(faSun) : setModeIcon(faMoon);
    };
    return (
        <div className="header d-flex justify-content-between align-items-center mt-4 mb-3">
            <h1>Notes</h1>
            <button className="btn mode" onClick={pageMood}>
                <FontAwesomeIcon icon={localStorage.mode ? faSun : faMoon} />
            </button>
        </div>
    );
};

export default Header;
