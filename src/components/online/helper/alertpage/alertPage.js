import React,{ useEffect }from 'react'
import "./alertpage.css"

export default function AlertPage(props) {
    useEffect(() => {
        if(props.overlay){
            document.getElementsByClassName("game-grid")[0].style.paddingBottom=0;
        }
        return()=>{
            document.getElementsByClassName("game-grid")[0].style.paddingBottom="2rem";
        }
    }, []);
    return (
        <div className={"game-grid alertpage box-element " + props.class}>
            <div className="alertPageContainer">
                <h1>{props.text}</h1>
            </div>
        </div>
    )
}
