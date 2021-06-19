import React from 'react';
import Fake from "./fake"
import ReactDice from "react-dice-complete";


const BoardElements = (props) => {
    const [Game,turn,setturn,Board,updateturn] = props.data
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
        </div>
      );
}

export default BoardElements;
