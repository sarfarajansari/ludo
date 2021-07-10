import React from 'react';
import "./sidebar.css"
import {FiMenu} from "react-icons/fi"
import {BsFillChatDotsFill} from "react-icons/bs"
import {AiOutlineClose} from "react-icons/ai"
import { useState } from 'react';
import { Input } from 'antd';
import fetchPost from '../online/helper/fetchPost';

const toggleclass=(type,active) =>{
    if (type === 0){
        return "hidden"
    }
    return active?"toggle active":"toggle"
}
const Text= (props) =>{
    const obj = props.obj 
    if(obj.name==="log"){
        return <div id={"chat-log"}>{obj.text}</div>
    }
    return <div id="chat-text"><strong>{obj.name} {" : "} </strong>{obj.text} </div>
}
const Sidebar = (props) => {
    const [active, setactive] = useState(false)
    const [text, settext] = useState("")
    
    const handleChange = (e)=>settext(e.target.value)
    const handleKeypress = (e) => {
        fetchPost("/sendmessage/",{
            "name":localStorage.getItem("name"),
            "message":text,
            "token":localStorage.getItem("currentgame")
        })
        settext("")
      };

    return (
        <div>
            <div className={toggleclass(props.data.type,active)}  onClick={()=>setactive(!active)}>{active?<AiOutlineClose/>:<>{props.data.type===1?<FiMenu/> :<BsFillChatDotsFill/>}</>} </div>
            <div className={active?"menu active":"menu"}>
                <h2>{props.data.type===2?"Chat Box":"Game Log"}</h2>
                <div className="chat-box-container">
                    <div>
                        {props.data.data.map((obj,i)=>{
                            return <Text key={i} obj={obj}/>
                        })}
                    </div>
                    {props.data.type===2?<Input placeholder="message" value={text} onPressEnter={handleKeypress} onChange={handleChange} />:<></>}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
