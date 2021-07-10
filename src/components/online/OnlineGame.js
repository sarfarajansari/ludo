import React, { useEffect, useState } from 'react';
import fetchGame from "./helper/fetchgame"
import app_data from './helper/appdata';

const OnlineGame = (props) => {
    const [sidebar,setsidebar] = props.sidebar;
    const [Ludo, setLudo] = useState({})
    const [Player, setPlayer] = useState(-1)
    const gtoken = props.match.params.gtoken
    const ptoken = props.match.params.ptoken
    useEffect(() => {
        fetchGame("/connect/"+gtoken+"/"+ptoken+"/",setLudo,setMessage,setPlayer)
        window.onbeforeunload=() =>{
            fetch(app_data.url+ "/disconnect/"+gtoken+"/"+ptoken+"/")
        }
        localStorage.setItem("currentgame",gtoken)

        setInterval(() =>fetchGame("/update/message/"+gtoken+"/"+ptoken+"/",false,setMessage),500)
        return () => {
            fetch(app_data.url+ "/disconnect/"+gtoken+"/"+ptoken+"/")
            console.log("disconnected")
        }
    }, [])

    const setMessage =(messages,type)=>{
        let s = sidebar;
        s.data = messages;
        s.type = type;
        setsidebar(s);
    }
    return (
        <div>
            
        </div>
    );
}

export default OnlineGame;
