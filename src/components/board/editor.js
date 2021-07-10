import React, { useEffect, useState } from "react";
import initial_board from "./initial.js";

const Editor = () => {
    const [classname, setclass] = useState("");
    const [coordinates, setcoordinates] = useState([])
    const [Board, setBoard] = useState(initial_board);
    // useEffect(() => {
    // var currentstate=Board
    // currentstate.forEach((row)=>{
    //     row.forEach((box)=>{
    //         box["children"]=[]
    //     })
    // })
    // console.log(JSON.stringify(currentstate))
    // }, []);
    const updateColor = (y, x) => {
        var current_board = Board;
        // current_board[y][x].class += " " + classname;
        // current_board[y][x]["safe"]=true;
        setBoard(current_board);
      };
      return (
        <>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <div className="board">
            <div>
              <input
                type="text"
                value={classname}
                onChange={(e) => setclass(e.target.value)}
              />
              <button onClick={() => console.log(JSON.stringify(Board))}>
                print
              </button>
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
                        onClick={() => {
                          // updateColor(index1, index2)
                          var c= coordinates
                          c.push([index1, index2])
                          console.log(JSON.stringify(c))
                          setcoordinates(c)
                        }}
                      >
                        {" "}
                        {box.value}{" "}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </>
      );
}

export default Editor;
