import React,{ useEffect, useState }from 'react'
import initialplayers from "./playerData"
import Selector from "../../playerSelector/selector"
import Pageheader from "../helper/page-header/pageheader"
import fetchPost from "../helper/fetchPost"
import {Redirect} from "react-router-dom"

export default function Create(props) {
    const [players,setplayers] = useState(initialplayers)
    const [created, setcreated] = useState({
        status:1,
        game:"",
        player:""
    })
    useEffect(() =>{
        props.update([["backtype",1],["backurl","/online/"],["hometype",1]])
    },[])
    const selectPlayer=(index)=>{
        players.forEach((player,playerindex)=>{
            if(playerindex===index){
                player.selected=true
                return
            }
            player.selected=false
        })
    }
    const get_colorID =()=>{
        let colorID =0
        players.forEach((p)=>{
            if(p.selected){
                colorID=p.colorId
            }
        })
        return colorID
    }
    const startgame = ()=>{
        props.update([["loading",true]])
        fetchPost("/create/",{
            colorId:get_colorID(),
            name:localStorage.getItem("name")
        },false,setcreated)

    }
    return (
        <>
            {created.status===0?<>
                <Redirect to={"/online/play/"+created.game+"/"+created.player+"/"}/>
            </>:<>
            <div className="create-container">
                <Pageheader title={"Create"}/>
                <h2>select your player</h2>
                <Selector players={players} onclick={selectPlayer}/> 
                <div><button id="startgame" onClick={startgame}>START GAME</button> </div>

            </div>
            </>}
        </>
    )
}
