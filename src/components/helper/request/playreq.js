import app_data from "./app_data"
import {handleErrors} from "./get_request"
import GetPlayer from "../Player/GetPlayer"
import song from "../Player/playermusic.mp3";



export default function Playreq(url,body,update,updateGame,storage){
    const [Board, setBoard,play,setGame]=storage
    const audio = new Audio(song);
    audio.playbackRate=1.2;
    body.token =  localStorage.getItem('LudoToken')
    var headers = { 'Content-Type': 'application/json' }
    const requestdata = {
        method: 'POST',
        headers: headers,
        body:JSON.stringify(body)
    }
    fetch(app_data.url+ url,requestdata)
    .then(handleErrors)
    .then(response=>response.json())
    .then((data)=>{
        console.log(data);
        if(data.status===0){
    
            if(data.steps.length>0){
                var old = data.old
                const start = ()=>{
                    var stop=false
                    var length = data.steps.length
                    if(length<=0){
                        clearInterval(interval)
                        stop = true
                        
                    }
                    
                    if(!stop){
                        audio.play()
                        
                        var b = Board
                        var children= b[old[0]][old[1]].children
                        var index =children.length-1
                        var element = index>-1? children[index]:false
                        if (element) {
                            b[old[0]][old[1]].children.splice(index,1)
                            b[old[0]][old[1]].value = GetPlayer(b[old[0]][old[1]].children,play)
                
                            
                            b[data.steps[0][0]][data.steps[0][1]].children.push(element)
                            b[data.steps[0][0]][data.steps[0][1]].value= GetPlayer(b[data.steps[0][0]][data.steps[0][1]].children,play)
                            
                            setBoard(b)
                            old = data.steps[0]
                            data.steps.splice(0,1)
                            
                        }
                    }
                }
                start()
                const interval = setInterval(start,300)
            }
            setTimeout(()=>{
                // updateGame([["rolled",data.rolled],["steps",data.steps],["old",data.old]])
                setGame(data)
                console.log("data set")
            },data.steps.length * 300 +1)
            
        }


    })
    .catch((error)=>{
        update([["alert",""]])
        setTimeout(()=>{
            update([["alert","some error occured please refresh!"],["alertType","error"],["loading",false]])
        },5)
    })
    
}