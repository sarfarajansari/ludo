import React from 'react';
import song from "./dicerolling.mp3"
const Fake = (props) => {
    const turn =[3,0,2,1]
    const [Game,updateGame] = props.state
    const roll =(i)=>{
        if(turn[i]===Game.turn && !Game.rolled){
            document.getElementsByClassName("die-container")[i].click()
            updateGame([["rolled",true]])
        }
    }
    return (
        <div className={props.className}>
        <div className="faketurn">
        <div onClick={()=>roll(props.index1)}></div>
        </div>
        <div></div>
        <div className="faketurn">
        <div onClick={()=>roll(props.index2)} ></div>
        </div>
      </div>
    );
}

export default Fake;
