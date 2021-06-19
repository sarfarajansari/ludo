import React from 'react';
import Fake from "./dices/fake"
import Dices from "./dices/dices"
import "./board.css";
import Gameboard from './Gameboard';


const BoardElements = (props) => {
    const [Game,turn,setturn,Board,updateturn,checkturn] = props.data
    return (
        <div className="board">
          <Fake className={"dice faketurn-container gr"} state={[Game.turn,turn, setturn]} index1={0} index2={1}/>
          <Dices data={[0,updateturn,checkturn,Game.turn]}/>
          <Gameboard data={[Board,updateturn]}/>
          <Dices data={[1,updateturn,checkturn,Game.turn]}/>
          <Fake className={"dice faketurn-container-bottom gr"} state={[Game.turn,turn, setturn]}  index1={2} index2={3}/>
        </div>
      );
}

export default BoardElements;
