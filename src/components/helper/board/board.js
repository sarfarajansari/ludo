import React, { useEffect, useState } from "react";
import useForceUpdate from "../forceupdate";
import initial_board from "./initial.js";
import "./board.css";
import Playerobjects from "../Player/playerobjects";
import nextPlayer from "../next";
import Postreq from "../request/post_request";
import Playreq from "../request/playreq";
import ReactDice from "react-dice-complete";
import "./dice.css";
import Fake from "./fake"
import BoardElements from "./boardElements"



const Board = (props) => {
  const playersList =[0,1,2,3]
  const [Game, setGame] = useState({
    players: [],
    turn:0,
  });
  const [turn, setturn] = useState({
    rolled: false,
    old: [0, 0],
    dice:6
  });
  const [Board, setBoard] = useState(initial_board);
  const forceUpdate = useForceUpdate();
  const play = (colorId,number)=>{
    if (Game.turn== colorId && turn.rolled){
      Playreq("/play/" + localStorage.getItem("GameToken") + "/",
      {colorId: colorId,number:number,step:turn.dice},
      props.update,
      setGame,updateturn)
    }
  }
  const Pawnobjects = [
    [<Playerobjects className={" redplayerobject"} step={play} colorId={0} number={0} />,
    <Playerobjects className={" redplayerobject"} step={play} colorId={0} number={1} />,
    <Playerobjects className={" redplayerobject"} step={play} colorId={0} number={2} />,
    <Playerobjects className={" redplayerobject"} step={play} colorId={0} number={3} />,],
    [<Playerobjects className={" yellowplayerobject"} step={play} colorId={1} number={0} />,
    <Playerobjects className={" yellowplayerobject"} step={play} colorId={1} number={1} />,
    <Playerobjects className={" yellowplayerobject"} step={play} colorId={1} number={2} />,
    <Playerobjects className={" yellowplayerobject"} step={play} colorId={1} number={3} />,],
    [<Playerobjects className={" blueplayerobject"} step={play} colorId={2} number={0}/>,
    <Playerobjects className={" blueplayerobject"} step={play} colorId={2} number={1}/>,
    <Playerobjects className={" blueplayerobject"} step={play} colorId={2} number={2}/>,
    <Playerobjects className={" blueplayerobject"} step={play} colorId={2} number={3}/>,],
    [<Playerobjects className={" greenplayerobject"} step={play} colorId={3} number={0}/>,
    <Playerobjects className={" greenplayerobject"} step={play} colorId={3} number={1}/>,
    <Playerobjects className={" greenplayerobject"} step={play} colorId={3} number={2}/>,
    <Playerobjects className={" greenplayerobject"} step={play} colorId={3} number={3}/>,],
  ];
  useEffect(() => {
    props.update([["loading", true]]);
    setInterval(forceUpdate, 10);
    Postreq(
      "/play/" + localStorage.getItem("GameToken") + "/",
      {},
      props.update,
      setGame
    );
  }, []);

  useEffect(() => {
    var b = Board
    b[turn.old[0]][turn.old[1]].value=""
    Game.players.forEach((player) => {
      player.coordinates.forEach((c) => {
        b[c.y][c.x].value = Pawnobjects[player.colorId][c.number];
      });
    });
    setBoard(b);
    console.log(Game)
  }, [Game.players,Game.turn]);
  const updateturn=(lists)=>{
    var current_state = turn
    for(var i =0 ;i<lists.length;i++){
        current_state[lists[i][0]]=lists[i][1]
    }
    console.log(current_state)
    setturn(current_state)
  }

    const checkturn = (number) =>{
      if(!Game.players[Game.turn].onground && number <6){
        Playreq("/nextplayer/" + localStorage.getItem("GameToken") + "/",
        {},
        props.update,
        setGame,updateturn)
      }
      if(Game.players[Game.turn].singleturn.value && number<6){
        play(Game.turn,Game.players[Game.turn].singleturn.number)
      }
    }
  return (
    <div className="board">
      <Fake className={"dice faketurn-container gr"} state={[Game.turn,turn, setturn]} index1={0} index2={1}/>
      <div className="dice gr">
        <div className={Game.turn===3?"box-element greenturn":"box-element"}>
          <ReactDice
            numDice={1}
            rollDone={(num) => {
              updateturn([["dice",num]])
              checkturn(num)
            }}
            margin={0}
          />
        </div>
        <div></div>
        <div className={Game.turn===0?"box-element redturn":"box-element"}>
          <ReactDice
            numDice={1}
            rollDone={(num) => {
              updateturn([["dice",num]])
              checkturn(num)
            }}
            margin={0}
          />
        </div>
      </div>
      
      {Board.map((row, index1) => {
        return (
          <div className="row">
            {row.map((box, index2) => {
              if (index1 === 7 && index2 === 7) {
                return (
                  <div className={box.class}>
                    <div className={box.child[0].class}></div>
                    <div className={box.child[1].class}></div>
                    <div className={box.child[2].class}></div>
                    <div className={box.child[3].class}></div>
                  </div>
                );
              }
              return (
                <div
                  className={box.class}
                  onClick={() =>updateturn([["old",[index1,index2]]])}
                >
                  {" "}
                  {box.value}{" "}
                </div>
              );
            })}
          </div>
        );
      })}

      <div className="dice by">
        <div className={Game.turn===2?"box-element blueturn":"box-element"}>
          <ReactDice
            numDice={1}
            rollDone={(num) => {
              updateturn([["dice",num]])
              checkturn(num)
            }}
            margin={0}
          />
        </div>
        <div></div>
        <div className={Game.turn===1?"box-element yellowturn":"box-element"}>
          <ReactDice
            numDice={1}
            rollDone={(num) => {
              updateturn([["dice",num]])
              checkturn(num)
            }}
            margin={0}
          />
        </div>
      </div>
      <Fake className={"dice faketurn-container-bottom gr"} state={[Game.turn,turn, setturn]}  index1={2} index2={3}/>
      {/* <BoardElements data={[Game,turn,setturn,Board,updateturn]}/> */}
    </div>
  );
};

export default Board;
