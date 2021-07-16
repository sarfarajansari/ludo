import React,{ useEffect} from 'react';
import "./manager.css"
import Pageheader from "../helper/page-header/pageheader"
import { Link } from 'react-router-dom';


const OnlineManager = (props) => {
    useEffect(() =>{
        props.update([["backtype",1],["backurl","/"],["hometype",1]])
    },[])
    return (
        <div>
            <Pageheader title={"Play"}/>
            <div className="manager-container">
                <Link to={"/online/create/"}><button className="btn" >Create Room</button></Link>
                <Link to={"/online/join/"}><button className="btn">Join Room</button></Link>
            </div>
        </div>
    );
}

export default OnlineManager;
