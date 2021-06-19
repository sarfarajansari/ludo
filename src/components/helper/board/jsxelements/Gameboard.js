import React from 'react';

const Gameboard = (props) => {
    const [Board,updateturn] =props.data;
    return (
        <>
            {Board.map((row, index1) => {
            return (
              <div className="row">
                {row.map((box, index2) => {
                  if (index1 === 7 && index2 === 7) {
                    return (
                      <div className={box.class}>
                          {box.child.map((obj,index) =><div className={obj.class}></div>)}
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
        </>
    );
}

export default Gameboard;
