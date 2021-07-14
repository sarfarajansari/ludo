import React, { useEffect, useState } from 'react';
import fetchGame from "./helper/fetchgame"
import fetchPost from './helper/fetchPost';
import app_data from './helper/appdata';
import LudoGame from './helper/Ludogame/ludo'
import BoardElement from './boardElements';
import initial_board from "./helper/initialoard"
import GetPlayer from "../helper/Player/GetPlayer"
import Playerobjects from "../helper/Player/playerobjects";
import {get_index} from "../helper/Ludogame/ludo"
import {colors} from "../helper/Ludogame/initial"

const OnlineGame = (props) => {
    const [sidebar,setsidebar] = props.sidebar;
    const [Ludo, setLudo] = useState(new LudoGame())
    const [Player, setPlayer] = useState(-1)
    const gtoken = props.match.params.gtoken
    const ptoken = props.match.params.ptoken

    const [Board, setBoard] = useState(initial_board)


    useEffect(() => {
        fetchGame("/connect/"+gtoken+"/"+ptoken+"/",setGame,setMessage,setPlayer)
        window.onbeforeunload=() =>{
            fetch(app_data.url+ "/disconnect/"+gtoken+"/"+ptoken+"/")
        }
        localStorage.setItem("currentgame",gtoken)

        setInterval(() =>{
          fetchGame("/update/message/"+gtoken+"/"+ptoken+"/",false,setMessage)
          fetchGame("/update/game/"+gtoken+"/"+ptoken+"/",receiveGame,false)
        },500)
        console.log("connected")
        return () => {
            fetch(app_data.url+ "/disconnect/"+gtoken+"/"+ptoken+"/")
            console.log("disconnected")
        }
    }, [])



    const updateLudo = (data)=>{
        var b = Board
        b.forEach((row)=>{
          row.forEach((box)=>{
            box.value=""
            box.children=[]
          })
        })
      data.players.forEach((player) => {
        player.coordinates.forEach((c) => {
          b[c.y][c.x]["children"].push(PL[player.colorId][c.number])
          b[c.y][c.x].value = GetPlayer(b[c.y][c.x]["children"],play)
        });
      });
      setBoard(b);
      }

    const setGame=(g) => {
        let ludo = Ludo
        ludo.update(g)
        setLudo(ludo)
        updateLudo(ludo)
    }
    const updateState=(lists)=>{
      var current_state = Ludo
      for(var i =0 ;i<lists.length;i++){
          current_state[lists[i][0]]=lists[i][1]
      }
      setLudo(current_state)
    }

    const setMessage =(messages,type)=>{
        let s = sidebar;
        s.data = messages;
        s.type = type;
        setsidebar(s);
    }

    const receiveGame = (game,needplay=false)=>{
      if(needplay){
        const onComplete = ()=>{
          let ludo = Ludo
          ludo.update(game)
          setLudo(ludo)
          updateLudo(ludo)
        }
        console.log("playing by server")
        play(game.lastplayed.colorId,game.lastplayed.number,true,game.dice,onComplete)
      }
      else{
        let ludo = Ludo
        ludo.update(game)
        setLudo(ludo)
      }
      
    }


    const play = (colorId,number ,noauth=false,gamedice=false,onComplete=false)=>{
      
      if(colorId!==Ludo.turn || !Ludo.rolled){
        if(!noauth){
          return
        }
      }
      let data = Ludo
      let c = data.players[get_index(data.players,colorId)].coordinates[number]
      var old = [c.y,c.x]
      let [stepped,steps]=data.step(c,gamedice?gamedice:data.dice)
      if(stepped){
        var z = Ludo.dice<2?"step":"steps"
      }

      data.rolled =data.dice===6?false:! data.update_turn(stepped)
      data.old = [c.y,c.x]
      data.steps=steps
      data.lastplayed.number = number
      data.lastplayed.colorId = colorId
      if(!noauth){
        fetchPost("/play/" +gtoken+"/"+ptoken+"/",data.data())
      }
      else{
        console.log(steps,stepped)
        data.rolled = false;
      }
      setLudo(data)
      PlaySteps(steps,old,colorId,onComplete)
    }

    const PlaySteps=(steps,old,colorId,onComplete=false)=>{
      const start = (interval=false)=>{
        var stop=false
        var length = steps.length
        if(length<=0){
            if(interval){
              if(onComplete){
                onComplete()
              }
              else{
                updateLudo(Ludo)
              }
              clearInterval(interval)
            }
            stop = true
            
        }
        
        if(!stop){
            
            var b = Board
            var children= b[old[0]][old[1]].children
            var index =false
            children.forEach((child,i)=>{
              if(child.colorId==colorId){
                index=i
              }
            })
            var element = index>-1? children[index]:false
            if (element) {
                b[old[0]][old[1]].children.splice(index,1)
                b[old[0]][old[1]].value = GetPlayer(b[old[0]][old[1]].children,play)
    
                
                b[steps[0][0]][steps[0][1]].children.push(element)
                b[steps[0][0]][steps[0][1]].value= GetPlayer(b[steps[0][0]][steps[0][1]].children,play)
                
                setBoard(b)
                old = steps[0]
                steps.splice(0,1)
                
            }
        }
    }
    var interval =false
    try{
      start()
      interval = setInterval(()=>{
        start(interval)
      },300)
    }
    catch{
      clearInterval(interval)
      updateLudo(Ludo)
    }
    }



    const checkturn = (number) =>{
      if(!Ludo.players[get_index(Ludo.players,Ludo.turn)].onground() && number <6){
        let g = Ludo
        g.get_next_turn()
        g.rolled=false;
        setGame(g)
        
        fetchPost("/play/" +gtoken+"/"+ptoken+"/",g.data())
      }
      else if(Ludo.players[get_index(Ludo.players,Ludo.turn)].singleturn().value && number<6 ){
        play(Ludo.turn,Ludo.players[get_index(Ludo.players,Ludo.turn)].singleturn().number)
      }
  
    }
    const sendmessage = (text,name) => {
      fetchPost("/sendmessage/",{
          "name":name,
          "message":text,
          "token":gtoken
      })
    }

    const PL = [[
        {"colorId":0,"number":0,"value":<Playerobjects className={" redplayerobject"} step={play} colorId={0} number={0} />},
        {"colorId":0,"number":1,"value":<Playerobjects className={" redplayerobject"} step={play} colorId={0} number={1} />,},
        {"colorId":0,"number":2,"value":<Playerobjects className={" redplayerobject"} step={play} colorId={0} number={2} />,},
        {"colorId":0,"number":3,"value":<Playerobjects className={" redplayerobject"} step={play} colorId={0} number={3} />,}],
        [{"colorId":1,"number":0,"value":<Playerobjects className={" yellowplayerobject"} step={play} colorId={1} number={0} />},
        {"colorId":1,"number":1,"value":<Playerobjects className={" yellowplayerobject"} step={play} colorId={1} number={1} />},
        {"colorId":1,"number":2,"value":<Playerobjects className={" yellowplayerobject"} step={play} colorId={1} number={2} />},
        {"colorId":1,"number":3,"value":<Playerobjects className={" yellowplayerobject"} step={play} colorId={1} number={3} />}],
        [{"colorId":2,"number":0,"value":<Playerobjects className={" blueplayerobject"} step={play} colorId={2} number={0}/>},
        {"colorId":2,"number":1,"value":<Playerobjects className={" blueplayerobject"} step={play} colorId={2} number={1}/>},
        {"colorId":2,"number":2,"value":<Playerobjects className={" blueplayerobject"} step={play} colorId={2} number={2}/>},
        {"colorId":2,"number":3,"value":<Playerobjects className={" blueplayerobject"} step={play} colorId={2} number={3}/>}],
        [{"colorId":3,"number":0,"value":<Playerobjects className={" greenplayerobject"} step={play} colorId={3} number={0}/>},
        {"colorId":3,"number":1,"value":<Playerobjects className={" greenplayerobject"} step={play} colorId={3} number={1}/>},
        {"colorId":3,"number":2,"value":<Playerobjects className={" greenplayerobject"} step={play} colorId={3} number={2}/>},
        {"colorId":3,"number":3,"value":<Playerobjects className={" greenplayerobject"} step={play} colorId={3} number={3}/>}]
      ];
    return <BoardElement board={Board} data={[Ludo,Player,updateState,checkturn]} />
}

export default OnlineGame;
