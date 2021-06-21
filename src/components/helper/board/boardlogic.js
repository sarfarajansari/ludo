import React, { useEffect, useState } from "react";
import useForceUpdate from "../forceupdate";
import initial_board from "./initial.js";
import Playerobjects from "../Player/playerobjects";
import Postreq from "../request/post_request";
import Playreq from "../request/playreq";
import BoardElements from "./jsxelements/boardElements";
import GetPlayer from "../Player/GetPlayer"



const BoardLogic = (props) => {
  const Token =props.match.params.token;
  const [Board, setBoard] = useState(initial_board);
  const forceUpdate = useForceUpdate();
  const playersList =[0,1,2,3]
  const [Game, setGame] = useState({
    players: [],
    turn:0,
    steps:[]
  });

  useEffect(() => {
    props.update([["loading", true]]);
    setInterval(forceUpdate, 10);
    Postreq(
      "/getgame/" + Token + "/",
      {},
      props.update,
      setGame
    );
  }, []);

  useEffect(() => {
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
  }, [Game.players]);

  // useEffect(() => {
  //   var old = Game.old
  //   var i = 0
  //   var length = Game.steps.length

  //   if(length!==0){
  //     const interval = setInterval(()=>{
  //       if(i>=length){
  //         clearInterval(interval)
  //       }
  //       var b = Board
  //       var children= b[old[0]][old[1]].children
  //       var index =children.length-1
  //       var element = index>-1? children[index]:false
  //       if (element) {
  //         b[old[0]][old[1]].children.splice(index,1)
  //         b[old[0]][old[1]].value = GetPlayer(b[old[0]][old[1]].children,play)

  //         console.log(i)
  //         b[Game.steps[i][0]][Game.steps[i][1]].children.push(element)
  //         b[Game.steps[i][0]][Game.steps[i][1]].value= GetPlayer(b[Game.steps[i][0]][Game.steps[i][1]].children,play)
  //         setBoard(b)

  //         old = Game.steps[i]
  //         i++;
  //       }
  //     },300)
  //   }
  // },[Game.steps])

  const play = (colorId,number)=>{
    if (Game.turn== colorId && Game.rolled){
      Playreq("/play/" + Token + "/",
      {colorId: colorId,number:number,step:Game.dice},
      props.update,updateGame,[Board,setBoard,play,setGame])
      
    }
  }

  const updateGame=(lists)=>{
    var current_state = Game
    for(var i =0 ;i<lists.length;i++){
        current_state[lists[i][0]]=lists[i][1]
    }
    console.log(current_state)
    setGame(current_state)
  }


  const checkturn = (number) =>{
    if(!Game.players[Game.turn].onground && number <6){
      Playreq("/nextplayer/" + Token + "/",
      {},
      props.update,updateGame,[Board,setBoard,play,setGame])
    }
    if(Game.players[Game.turn].singleturn.value && number<6){
      play(Game.turn,Game.players[Game.turn].singleturn.number)
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
