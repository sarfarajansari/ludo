import React from "react";
import ReactDice from "react-dice-complete";
import "./dice.css";

const Dices = (props) => {
  const data = [
    {
      class: "gr",
      obj: [
        { class: "greenturn", turn: 3 },
        { class: "redturn", turn: 0 },
      ],
    },
    {
      class: "by",
      obj: [
        { class: "blueturn", turn: 2 },
        { class: "yellowturn", turn: 1 },
      ],
    },
  ];
  const [n,updategame,checkturn,turn]=props.data

  const getdiv=(k)=> k===0?<div></div>:<></>
  return (
    <>
      <div className={"dice " + data[n].class}>
        {data[n].obj.map((o, index) => {
          return (
            <>
            <div
              
              className={
                turn === o.turn ? "box-element "  : "box-element "+ o.class
              }
            >
              <ReactDice
                numDice={1}
                rollDone={(num) => {
                  updategame([["dice", num],["rolled",true]]);
                  checkturn(num);
                }}
                margin={0}
              />
            </div>
            {getdiv(index)}
            </>
          );
        })}
      </div>
    </>
  );
};

export default Dices;
