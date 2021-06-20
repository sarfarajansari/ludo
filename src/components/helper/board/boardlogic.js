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
  });


  const [turn, setturn] = useState({
    rolled: false,
    old: [0, 0],
    dice:6,
  });


  const play = (colorId,number)=>{
    if (Game.turn== colorId && turn.rolled){
      var initial = Game.players[colorId].coordinates[number].initial
      updateturn([["rolled",false]])
      var steps =initial && turn.dice===6?6:1;
      var fake =steps===1 && turn.dice >1?true:false;
      Playreq("/play/" + Token + "/",
      {colorId: colorId,number:number,step:steps},
      props.update,
      setGame,updateturn)

      var fake = true
      var counter = 0;
      if(turn.dice!==1 && !initial){
        var interval = setInterval(()=>{
          counter++;
          if(counter===turn.dice-1){
            clearInterval(interval);
            fake=false;
          }
          console.log(fake)
          Playreq("/play/" + Token + "/",
          {colorId: colorId,number:number,step:1,fake:fake},
          props.update,
          setGame,updateturn)
        },300)
      
    }
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


  useEffect(() => {
    props.update([["loading", true]]);
    setInterval(forceUpdate, 10);
    Postreq(
      "/play/" + Token + "/",
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
        // b[c.y][c.x].value =PL[player.colorId][c.number].value
      });
    });
    setBoard(b);
  }, [Game.players,Game.turn]);


  const updateturn=(lists)=>{
    var current_state = turn
    for(var i =0 ;i<lists.length;i++){
        current_state[lists[i][0]]=lists[i][1]
    }
    setturn(current_state)
  }

  const checkturn = (number) =>{
    if(!Game.players[Game.turn].onground && number <6){
      Playreq("/nextplayer/" + Token + "/",
      {},
      props.update,
      setGame,updateturn)
    }
    if(Game.players[Game.turn].singleturn.value && number<6){
      play(Game.turn,Game.players[Game.turn].singleturn.number)
    }
  }
  return <BoardElements data={[Game,turn,setturn,Board,updateturn,checkturn]}/>
};
export default BoardLogic;
