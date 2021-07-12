import React, { useEffect, useState } from 'react';
import fetchGame from "./helper/fetchgame"
import app_data from './helper/appdata';
import LudoGame from './helper/Ludogame/ludo'
import BoardElement from './boardElements';
import initial_board from "../board/initial"
import GetPlayer from "../helper/Player/GetPlayer"
import Playerobjects from "../helper/Player/playerobjects";

const OnlineGame = (props) => {
    const [sidebar,setsidebar] = props.sidebar;
    const [Ludo, setLudo] = useState(new LudoGame())
    const [Player, setPlayer] = useState(-1)
    const gtoken = props.match.params.gtoken
    const ptoken = props.match.params.ptoken

    const [Board, setBoard] = useState(initial_board)


    useEffect(() => {
        console.log(Ludo)
        fetchGame("/connect/"+gtoken+"/"+ptoken+"/",setGame,setMessage,setPlayer)
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
        console.log(ludo)
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
    const play = ()=>{}

    const checkturn = (number) =>{
      if(!Ludo.players[get_index(Ludo.players,Ludo.turn)].onground() && number <6){
        let g = Ludo
        g.get_next_turn()
        g.rolled=false;
        setGame(g)
        
        // Playreq("/play/" + Token + "/",
        // g.data(),
        // props.update)
      }
      // else if(Game.players[get_index(Game.players,Game.turn)].singleturn().value && number<6 ){
      //   play(Game.turn,Game.players[get_index(Game.players,Game.turn)].singleturn().number)
      // }
  
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
