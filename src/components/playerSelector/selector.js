import React from 'react';
import "./selector.css"
const Selector = (props) => {
    return (
        <div className="game-players">
            {props.players.map((player) =>{
                return(
                    <div  id={player.selected?"selectedplayer":""} >
                        <div className="player-select-obj" style={{backgroundImage:`url(${player.img})`,border:"4px solid " + player.color}} onClick={()=>props.onclick(player.colorId)}></div>
                    </div>
                )
            })}
        </div>
    );
}

export default Selector;
