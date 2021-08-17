const Text = (props) => {
  const obj = props.obj;
  if (obj.name === "log") {
    return <div id={"chat-log"}>{obj.text}</div>;
  }
  return (
    <div id="chat-text">
      <strong>
        {obj.name} {" : "}{" "}
      </strong>
      {obj.text}{" "}
    </div>
  );
};

export default Text;

export const toggleclass = (isPlaying, active) => {
  if (!isPlaying) return "hidden";
  return active ? "toggle active" : "toggle";
};
