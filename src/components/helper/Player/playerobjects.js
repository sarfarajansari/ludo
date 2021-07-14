import React ,{ useState ,useEffect} from "react";
import "./player.css";

const Playerobjects = (props) => {
  const [disabled, setdisabled] = useState(false)
  return (
    <div className={"playerobject " + props.className} id={props.id} onClick={()=>props.step(props.colorId,props.number)}>
      <div></div>
    </div>
  );
};


export default Playerobjects;
