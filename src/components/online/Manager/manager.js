import React,{ useEffect, useState} from 'react';
import "./manager.css"
import Pageheader from "../helper/page-header/pageheader"
import initialplayers from "./playerData"
import Selector from "../../playerSelector/selector"
import Back from "../../helper/back/back"


const onlineManager = (props) => {
    const [page, setpage] = useState(0)
    const [players,setplayers] = useState(initialplayers)

    useEffect(() =>{
        if(page==0){
            props.update([["backtype",1],["backurl","/"]])
        }
    },[page])
    const changepage =(page)=>{
        setpage(page)
        props.update([["backtype",2],["backclick",()=>setpage(0)]])
    }
    return (
        <div>
            {page===0?<>
                <Pageheader title={"Play"}/>
                <div className="manager-container">
                    <button className="btn" onClick={()=>changepage(1)} >Create Room</button>
                    <button className="btn" onClick={()=>changepage(2)}>Join Room</button>
                </div>
            </>:<>
            
            {page===1?<>
            <Pageheader title={"Create"}/>
            <Selector players={players} onclick={(index)=>{
                players.forEach((player)=>{
                    if(player.colorId===index){
                        player.selected=true
                        return
                    }
                    player.selected=false
                })
            }}/>
            </>:<>

            <Pageheader title={"Join"}/>
            </>}
            </>}
        </div>
    );
}

export default onlineManager;
