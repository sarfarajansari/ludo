import React from 'react';
import Fake from "./dices/fake"
import Dices from "./dices/dices"
import "./board.css";
import Gameboard from './Gameboard';


const BoardElements = (props) => {
    const [Game,Board,updategame,checkturn] = props.data
    const boardclass = ()=>{
      switch(Game.turn){
        case 0:
          return "r"
        case 1:
          return "y"
        case 2:
          return "b"
        case 3:
          return "g"
        default:
          return ""
      }
    }
    return (
        <div className="board">
          <Fake className={"dice faketurn-container gr"} state={[Game,updategame]} index1={0} index2={1}/>
          <Dices data={[0,updategame,checkturn,Game.turn]}/>
          <div className={"board main " + boardclass()}>
          <Gameboard data={[Board,updategame]}/>
         </div>
          <Dices data={[1,updategame,checkturn,Game.turn]}/>
          <Fake className={"dice faketurn-container-bottom gr"} state={[Game,updategame]}  index1={2} index2={3}/>
        </div>
      );
}

export default BoardElements;
