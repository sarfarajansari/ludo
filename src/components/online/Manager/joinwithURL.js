import React,{ useEffect, useState} from 'react'
import initialplayers from "./playerData"
import fetchPost from '../helper/fetchPost'
import Selector from "../../playerSelector/selector"
import Pageheader from "../helper/page-header/pageheader"
import {Redirect} from "react-router-dom"
import AlertPage from '../helper/alertpage/alertPage'

export default function JoinWithURL(props) {
    const [players, setplayers] = useState(initialplayers)
    const gtoken = props.match.params.gtoken
    const [joined, setjoined] = useState({
        status:1,
        game:gtoken,
        player:""
    })
    const [page,setpage] =useState(1)

    useEffect(() =>{
        props.update([["backtype",1],["backurl","/online/join/"],["hometype",1],["loading",true]])
        fetchPost("/availableplayers/"+gtoken+"/",{},false,updatePlayers)

    },[])

    const selectPlayer=(index)=>{
        let set = false
        players.forEach((player,playerindex)=>{
            if(playerindex===index && !player.disabled){
                set=true
                return
            }
        })
        if(set){
            players.forEach((player,playerindex)=>{
                if(playerindex===index && !player.disabled){
                    player.selected=true
                    return
                }
                player.selected=false
            })
        }

    }
    const updatePlayers =(data)=>{
        if(data.status===0){
            let current_state= players
            current_state.forEach((player,index)=>{
                data.players.forEach((colorId)=>{
                    if(colorId===player.colorId){
                        player.disabled=true;
                        
                    }
                })
                player.selected=false;
            })
            let set = false
            current_state.forEach((player,index)=>{
                if(!set && !player.disabled){
                    player.selected=true;
                    set=true;
                }
            })
            setplayers(current_state)
        }
        else{
            setpage(2)
        }
        
        props.update([["loading",false]])
    }
    const get_colorID =()=>{
        let colorID =false
        players.forEach((p)=>{
            if(p.selected){
                colorID=p.colorId
            }
        })
        return colorID
    }
    const joingame = ()=>{
        if(!get_colorID()){
            return
        }
        props.update([["loading",true]])
        fetchPost("/join/",{
            colorId:get_colorID(),
            name:localStorage.getItem("name"),
            token:gtoken
        },false,setjoined)

    }
    const roomFull =()=>{
        let room = true
        players.forEach((p)=>{
            if(!p.disabled){
                room = false
            }
        })
        return room
    }
    return (
        <>  
            {page===1?<>
                    {joined.status===0?<>
                    <Redirect to={"/online/play/"+joined.game+"/"+joined.player+"/"}/>
                </>:<>
                    {roomFull()?<>
                   <AlertPage class="green overlay" overlay={true} text="Room is full!" />
                    </>:<>
                        <div className="create-container">
                            <Pageheader title={"Join"}/>
                            <h2>select your player</h2>
                            <Selector players={players} onclick={selectPlayer}/> 
                            <div><button id="startgame" onClick={joingame}>JOIN ROOM</button> </div>

                        </div>
                    </>}

                </>}
            </>:<>
                <AlertPage class={"red overlay"} overlay={true} text={"Invalid Room"}/>
            </>}

        </>
    )
}
