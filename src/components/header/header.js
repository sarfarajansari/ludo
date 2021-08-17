import "./header.css"
import React from "react"
import Sidebar from "./sidebar/sidebar";

const Header = (props) => {
    return (
        <div className="header-container">
            <div className="header-text">
                <h1>Marvelous Ludo</h1>
            </div>
            <Sidebar data={props.sidebar}/>
        </div>
    );
}

export default Header;
