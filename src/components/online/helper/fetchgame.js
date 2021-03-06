import app_data from "./appdata"


const fetchGame = (url,setGame,setMessages,setPlayer,update=false)=>{
    
    fetch(app_data.url+url)
    .then((response)=>response.json())
    .then((data)=>{
        // console.log(data)
        if("messages" in data){
            setMessages(data.messages,2)
        }
        if("game" in data){
            if ("play" in data){
                console.log(data.play,url)
                setGame(data.game,data["play"])
            }
            else{
                setGame(data.game)
            }
            if("player" in data){
                data.game.players.forEach((p)=>{
                    if(p.colorId ===data["player"]){
                        localStorage.setItem("name",p.name)
                    }
                })
            }
        }
        if("player" in data){
            setPlayer(data.player)
        }
    })
}
export default fetchGame