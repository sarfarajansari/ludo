import React,{ useEffect, useState }from 'react'
import Pageheader from "../helper/page-header/pageheader"
import { Input } from 'antd';
import {Link} from 'react-router-dom'

export default function Join(props) {
    const [room_id, setroom_id] = useState("");
    useEffect(() =>{
        props.update([["backtype",1],["backurl","/online/"],["hometype",1]])
    },[])

    const joinbtnclick=()=>{
        document.getElementById("join-btn").click()
    }
    return (
        <div>
            <Pageheader title={"Join"}/>
            <Input size="large" value={room_id} onChange={(e)=>setroom_id(e.target.value)}
             onPressEnter={joinbtnclick}
             width="80%" placeholder="Enter Room ID"  />
            <Link to={"/online/join/" + room_id+"/"}><button id="join-btn" className="btn" >Join</button></Link>
        </div>
    )
}
