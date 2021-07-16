import React from 'react';
import Gameboard from "../board/jsxelements/Gameboard"
import "./boardonline.css"
import Dice from "./dice/dice"
import {get_index} from "../helper/Ludogame/ludo"
import AlertPage from './helper/alertpage/alertPage';

const boardElements = (props) => {
    const [Ludo,Player,updateState,checkturn] = props.data
    return (
        <>
            {!Ludo.active(Player)?<>
                <AlertPage text={"You're inactive please refresh"} class={"red"}/>
                </>:<>
                {Ludo.activePlayers()<2?<>
                <AlertPage text={"Waiting for players ..."} class={"green"}/>
                </>:<>
                <div className="board online">
                    {/* <button onClick={()=>console.log(props.data[0])}>print</button> */}
                    <Gameboard data={props.board}/>
                    <Dice data={props.data}/>
                </div>
                </>}
            </>}
        </>
    );
}

export default boardElements;
