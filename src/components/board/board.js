import React, { useEffect, useState } from 'react';
import useForceUpdate from "../helper/forceupdate"
import initial_board from "./initial.js"
import "./board.css"


const Board = () => {
    const [Board, setBoard] = useState(initial_board)
    const [view, setview] = useState(true)
    const [classname, setclass] = useState("")
    const forceUpdate = useForceUpdate();
    useEffect(() => {
        setInterval(forceUpdate,10)
        // var currentstate=Board
        // currentstate.forEach((row)=>{
        //     row.forEach((box)=>{
        //         if(box.path){
        //             box["class"]+=" path"
        //         }
        //     })
        // })
        // console.log(JSON.stringify(currentstate))

    }, [])
    const updateColor=(y,x)=>{
        var current_board =Board
        current_board[y][x].class +=" " + classname
        setBoard(current_board)
    }
    if(view){
        return(
            <div className="board">
            <div>
                <button onClick={()=>setview(false)}>Edit</button>
            </div>
            {Board.map((row, index1) => {
                return (
                <div className="row">
                    {row.map((box, index2) => {
                    return <div className={box.class} onClick={()=>console.log(index1,index2)}> {box.value} </div>;
                    })}
                </div>
                );
            })}
        </div>
        )
    }
    return (
        <>
        <div>
                <input type="text" value={classname} onChange={(e)=>setclass(e.target.value)}/>
                <button onClick={()=>console.log(JSON.stringify(Board))}>print</button>
                <button onClick={()=>setview(true)}>view</button>
        </div>
        <div className="diagonal-split-background"></div>
        <div className="board">
            {Board.map((row, index1) => {
                return (
                <div className="row">
                    {row.map((box, index2) => {
                    return <div className={box.class} onClick={()=>updateColor(index1,index2)} > {box.value} </div>;
                    })}
                </div>
                );
            })}
        </div>
        </>

    );
}

export default Board;

