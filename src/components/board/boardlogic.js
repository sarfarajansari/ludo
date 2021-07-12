import React, { useEffect, useState } from "react";
import useForceUpdate from "../helper/forceupdate";
import initial_board from "./initial.js";
import Playerobjects from "../helper/Player/playerobjects";
import Playreq from "../helper/request/playreq";
import BoardElements from "./jsxelements/boardElements";
import GetPlayer from "../helper/Player/GetPlayer"
import Ludo,{get_index} from "../helper/Ludogame/ludo";
import {colors} from "../helper/Ludogame/initial"
import app_data from "../helper/request/app_data"
import post_request from "../helper/request/postrequest"



const BoardLogic = (props) => {
  const [sidebar,setsidebar] = props.sidebar;
  const Token =props.token;
  const [Board, setBoard] = useState(initial_board);
  const forceUpdate = useForceUpdate();
  const [Game, setGame] = useState(props.initial);
  

  const updateLudo = ()=>{
    var b = Board
    b.forEach((row)=>{
      row.forEach((box)=>{
        box.value=""
        box.children=[]
      })
    })
  Game.players.forEach((player) => {
    player.coordinates.forEach((c) => {
      b[c.y][c.x]["children"].push(PL[player.colorId][c.number])
      b[c.y][c.x].value = GetPlayer(b[c.y][c.x]["children"],play)
    });
  });
  setBoard(b);
  }
  useEffect(()=>{
    updateLudo()
    fetch(app_data.url+"/getmsgs/"+ Token+"/")
    .then(response=>response.json())
    .then((data)=>setsidebar(data))
    console.log("yes")
    return () => {
      var s = sidebar
      s.type=0;
      setsidebar(s)
      console.log("returned")

    }
  },[])
  
  const updateLog = (text)=>{
    var s = sidebar
    s.data.push({
      text:text,
      name:"log"
    })
    setsidebar(s)
    post_request("/message/",{
      "message":text,
      "token":Token
    })
  }

  const play = (colorId,number)=>{
    if(colorId!==Game.turn || !Game.rolled){
      return
    }
    let data = Game
    let c = data.players[get_index(data.players,colorId)].coordinates[number]
    var old = [c.y,c.x]
    let [stepped,steps]=data.step(c,data.dice)

    if(stepped){
      var z = Game.dice<2?"step":"steps"
      updateLog(colors[colorId] + " played " + String(Game.dice) + " " + z)
    }

    data.rolled =data.dice===6?false:! data.update_turn(stepped)
    data.old = [c.y,c.x]
    data.steps=steps

    
    const start = (interval=false)=>{
        var stop=false
        var length = data.steps.length
        if(length<=0){
            if(interval){
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
    
                
                b[data.steps[0][0]][data.steps[0][1]].children.push(element)
                b[data.steps[0][0]][data.steps[0][1]].value= GetPlayer(b[data.steps[0][0]][data.steps[0][1]].children,play)
                
                setBoard(b)
                old = data.steps[0]
                data.steps.splice(0,1)
                
            }
        }
    }
    start()
    const interval = setInterval(()=>{
      start(interval)
    },300)
    setTimeout(()=>{
      setGame(data)
      updateLudo()
    }, 300 * data.steps.length +30)
    Playreq("/play/" + Token + "/",
    data.data(),
    props.update)
    
  }

  const updateGame=(lists)=>{
    var current_state = Game
    for(var i =0 ;i<lists.length;i++){
        current_state[lists[i][0]]=lists[i][1]
    }
    setGame(current_state)
  }


  const checkturn = (number) =>{
    if(!Game.players[get_index(Game.players,Game.turn)].onground() && number <6){
      let g = Game
      g.get_next_turn()
      g.rolled=false;
      setGame(g)
      Playreq("/play/" + Token + "/",
      g.data(),
      props.update)
    }
    else if(Game.players[get_index(Game.players,Game.turn)].singleturn().value && number<6 ){
      play(Game.turn,Game.players[get_index(Game.players,Game.turn)].singleturn().number)
    }

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
  return <BoardElements data={[Game,Board,updateGame,checkturn]}/>
};
export default BoardLogic;
