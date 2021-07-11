import "./mode.css";
import React,{useEffect} from "react"
import {Link} from "react-router-dom";

const modeselector = (props) => {
    useEffect(() => {
        props.update([["backtype",0],["hometype",0]])
        return () => {
            props.update([["hometype",1],["backtype",1]])
        }
    }, [])
    return (
        <div className="mode-container">
            <h1>PLAY</h1><hr />
            <div>
                <Link to="/local/"><button className="btn">Local Game</button></Link>
                <Link to="/online/"><button className="btn">Online</button></Link>
            </div>
        </div>
    );
}

export default modeselector;
