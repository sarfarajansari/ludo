import React,{ useEffect, useState} from "react";




const TwoPlayers = (props) => {
    return (
        <>  
            <div onClick={props.update} className="twoplayers one">{props.first}</div>
            <div onClick={props.update} className="twoplayers two">{props.second}</div>
        </>
    );
}
const ThreePlayers = (props) => {
    return (
        <>  
            <div onClick={props.update} className="threeplayers one">{props.first}</div>
            <div onClick={props.update} className="threeplayers two">{props.second}</div>
            <div onClick={props.update} className="threeplayers three">{props.third}</div>
        </>
    );
}

const FourPlayers = (props) => {
    return (
        <>  
            <div onClick={props.update} className="fourplayers one">{props.first}</div>
            <div onClick={props.update} className="fourplayers two">{props.second}</div>
            <div onClick={props.update} className="fourplayers three">{props.third}</div>
            <div onClick={props.update} className="fourplayers four">{props.forth}</div>
        </>
    );
}


const GetPlayer = (list,step)=>{
    const update =()=>{
        list.forEach((obj)=>{
            step(obj.colorId,obj.number)
        })
    }
    switch(list.length){
        case 1:
            return list[0].value;
        case 2:
            return <TwoPlayers update={update} first={list[0].value} second={list[1].value}/>
        case 3:
            return <ThreePlayers update={update} first={list[0].value} second={list[1].value} third={list[2].value}/>
        case 4:
            return <FourPlayers update={update} first={list[0].value} second={list[1].value} third={list[2].value} forth={list[3].value}/>
        default:
            return <></>;
    }
    
}
export default GetPlayer
