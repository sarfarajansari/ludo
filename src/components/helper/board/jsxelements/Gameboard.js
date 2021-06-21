import React from 'react';

const Gameboard = (props) => {
    const [Board,updateturn] =props.data;
    return (
        <>
            {Board.map((row, index1) => {
            return (
              <div key={index1}  className="row">
                {row.map((box, index2) => {
                  if (index1 === 7 && index2 === 7) {
                    return (
                      <div key={index2}  className={box.class}>
                          {box.child.map((obj,index) =><div key={index} className={obj.class}></div>)}
                      </div>
                    );
                  }
                  return (
                    <div
                      key={index2}
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
