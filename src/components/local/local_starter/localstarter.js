import React ,{ useEffect, useState } from 'react';
import app_data from "../../helper/request/app_data"
import Ludo from '../../helper/Ludogame/ludo'
import BoardLogic from '../../board/boardlogic';
import Starter from '../../helper/starter/starter';


const Localstarter = (props) => {
const [state, setstate] = useState({})
const update =props.update

    useEffect(() => {
        props.update([["loading", true]]);
        var headers = { 'Content-Type': 'application/json' }
        const requestdata = {
            method: 'POST',
            headers: headers,
            body:JSON.stringify({})
        }
        fetch(app_data.url+ "/getgame/" +props.match.params.token + "/",requestdata)
        .then(response=>response.json())
        .then((data)=>{
            if(data.status===1){
                
                setTimeout(()=>{
                    update([["alert","some error occured please refresh!"],["alertType","error"],["loading",false]])
                },5)
            }
            else{
                let game = new Ludo(data.players.length)
                game.initialize(data)
                setstate(game)
            }
            
        })
        .catch((error)=>{
            update([["alert",""]])
            setTimeout(()=>{
                update([["alert","some error occured please refresh!"],["alertType","error"],["loading",false]])
            },5)
        })
    }, []);

    if("players" in state && props.storage.loading){
        update([["loading",false],["gamestarted",1]])
        setTimeout(()=>{update([["gamestarted",2]])},5000)
    }
    if("players" in state && props.storage.gamestarted===2){
        return <BoardLogic sidebar={props.sidebar} update={update} initial={state} token={props.match.params.token}/>
    }
    else{
        if(props.storage.gamestarted ===0){
            return <div></div>
        }
        else{
            return <Starter/>
        }
        
    }
    
}

export default Localstarter;
