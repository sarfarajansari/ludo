import React, { useEffect, useState } from "react";
import useForceUpdate from "../forceupdate";
import initial_board from "./initial.js";
import "./board.css";
import {Pawnobjects} from "../Player/playerobjects"
import nextPlayer from "../next";
import Postreq from "../request/post_request";
import ReactDice from 'react-dice-complete'
import 'react-dice-complete/dist/react-dice-complete.css'
import "./dice.css"

const Board = (props) => {
  const [Game, setGame] = useState({
      players:[]
  })
  const [turn, setturn] = useState({
    turn:0,
    rolled:false,
    old:[0,0]
  })
  const [Board, setBoard] = useState(initial_board);
  const forceUpdate = useForceUpdate();
  useEffect(() => {
    props.update([["loading",true]])
    setInterval(forceUpdate, 10);
    Postreq("/play/"+ localStorage.getItem("GameToken")+"/",{},props.update,setGame)
  }, []);

  useEffect(() => {

    Game.players.forEach((player)=>{
      player.coordinates.forEach((c)=>{
        Board[c.y][c.x].value=Pawnobjects[player.colorId]
      })
    })
  },[Game.players])


  return (
    <div className="board-container">
      <div className="dice g">
        <ReactDice
        numDice={1}
        rollDone={(num)=>console.log(num)}
        margin={0}
        />
      </div>
    <div className="board">
      <div className="dice r">
        <ReactDice
        numDice={1}
        rollDone={(num)=>console.log(num)}
        margin={0}
        />
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
                  onClick={() => {console.log(index1,index2)}}
                >
                  {" "}
                  {box.value}{" "}
                </div>
              );
            })}
          </div>
        );
      })}
      
      
      <div className="dice b">
        <ReactDice
        numDice={1}
        rollDone={(num)=>console.log(num)}
        margin={0}
        />
      </div>
    </div>
    <div className="dice y">
        <ReactDice
        numDice={1}
        rollDone={(num)=>console.log(num)}
        margin={0}
        />
      </div>
    
    </div>
  );
};

export default Board;

