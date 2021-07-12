import React from "react";
import ReactDice from "react-dice-complete";

const Dice = (props) => {
    const bg = ["redturn","yellowturn","blueturn","greenturn"]
    const [Ludo,Player,update,checkturn]=props.data

    const roll =()=>{
        if(Player===Ludo.turn && !Ludo.rolled){
            update([["rolled",true]])
            document.getElementsByClassName("die-container")[0].click()
        }
    }
  return (
    <>
      <div className={"dice online"}>
            <div
              className={Ludo.turn===Player?"box-element "+bg[0]:"box-element"}
            >
              <ReactDice
                numDice={1}
                rollDone={(num) => {
                  updategame([["dice", num]]);
                  checkturn(num);
                }}
                margin={0}
              />
            </div>
            <div className="faketurn online">
                <div onClick={roll} ></div>
            </div>
      </div>
    </>
  );
};

export default Dice;
