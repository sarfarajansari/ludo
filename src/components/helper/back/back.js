import React from 'react';
import {Link} from "react-router-dom"
import {BiArrowBack} from "react-icons/bi"
import {AiFillHome} from "react-icons/ai"

const back = (props) => {
    if(props.type===0){
        return <></>
    }
    return (
        <div>
            {props.type===1?<>
            <Link to={props.url}>
                <button className="btn primary">
                    {!props.home?<BiArrowBack/>:<AiFillHome/>}
                    {" "}
                    {props.name}
                </button>
            </Link>
        </>:<>
        <button className="btn primary" onClick={props.onclick}>
            <BiArrowBack/>
            {" "}
            {props.name}
        </button>
        </>}
        </div>
    );
}

export default back;
