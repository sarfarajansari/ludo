import React from 'react';
import Gameboard from "../board/jsxelements/Gameboard"
import "./boardonline.css"
import Dice from "./dice/dice"

const boardElements = (props) => {
    return (
        <div className="board online">
            <button onClick={()=>console.log(props.data[0])}>print</button>
            <Gameboard data={props.board}/>
            <Dice data={props.data}/>
        </div>
    );
}

export default boardElements;
