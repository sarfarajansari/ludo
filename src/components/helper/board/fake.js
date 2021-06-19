import React from 'react';

const Fake = (props) => {
    const turn =[3,0,2,1]
    const [current,state,setstate] = props.state
    const roll =(i)=>{
        if(turn[i]===current && !state.rolled){
            document.getElementsByClassName("die-container")[i].click()
            var currentstate = state
            currentstate.rolled = true
            setstate(currentstate)
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
