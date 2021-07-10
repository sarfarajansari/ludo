import "./mode.css";
import React from "react"
import {Link} from "react-router-dom";

const modeselector = () => {
    return (
        <div className="mode-container">
            <h1>PLAY</h1><hr />
            <div>
                <Link to="/newgame"><button className="btn">Local Game</button></Link>
                <Link to="/online/play/testgame/saifu/"><button className="btn">Online</button></Link>
            </div>
        </div>
    );
}

export default modeselector;
