import "./player.css";

const Playerobjects = (props) => {
  return (
    <div className={"playerobject " + props.className} onClick={()=>props.step(props.colorId,props.number)}>
      <div></div>
    </div>
  );
};


export default Playerobjects;
