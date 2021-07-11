import React ,{ useState } from "react";
import "./localCreator.css";
import playerData from "./playerdata"
import Postreq from "../../helper/request/post_request";
import { Redirect} from "react-router-dom"
import Selector from "../../playerSelector/selector"

const LocalCreator = (props) => {
    const [players, setplayers] = useState(playerData)
    const [state, setstate] = useState({
        status:1,
        token:""
    })


    const select = (index)=>{
        let p = players;
        p[index].selected =!players[index].selected;
        setplayers(p)
    }
    const changeName = (name,index)=>{
        let p = players;
        p[index].name =name;
        setplayers(p)
    }
    const checkvalid=()=>{
        let list = [[],[]]
        players.forEach((player)=>{
            if(player.selected){
                list[0].push(player.colorId)
                list[1].push(player.name)
            }
        })
        return list
    }
    const startgame = ()=>{
        const list =checkvalid()
        if(list[0].length<2){
            props.update([["alert","please select atleast 2 players"],["alertType","error"]])
            return
        }
        props.update([["loading",true]])
        Postreq("/initialize/",{
            listPlayers:list[0],
            names:list[1]
        },props.update,setstate)

    }

    if(state.status===0 && state.token){
        return <Redirect to={"/local/play/"+ state.token}/>
    }
    return (
        <>
            <div className="creator-container">
                <h1>New Game</h1><hr/>
                <h3>Select players</h3>
                <Selector onclick={select} players={players}/>
                <div><button id="startgame" onClick={startgame}>START GAME</button> </div>
            </div>
        </>
    );
}

export default LocalCreator;
