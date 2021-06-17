import "./player.css";

const Playerobjects = (props) => {
  return (
    <div className={"playerobject " + props.className}>
      <div></div>
    </div>
  );
};

export const Pawnobjects = [
  <Playerobjects className={" redplayerobject"} />,
  <Playerobjects className={" yellowplayerobject"} />,
  <Playerobjects className={" blueplayerobject"} />,
  <Playerobjects className={" greenplayerobject"} />
];
export default Playerobjects;
