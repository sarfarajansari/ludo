import React from "react";
import "./sidebar.css";
import { BsFillChatDotsFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { Input } from "antd";
import Text, { toggleclass } from "./text";
import { useDispatch, useSelector } from "react-redux";
import {
  message,
  selectIsPLaying,
  selectMessages,
} from "../../../redux/sidebar/sidebarSlice";

const Sidebar = (props) => {
  const [active, setactive] = useState(false);
  const [text, settext] = useState("");

  const dispatch = useDispatch();
  const isPlaying = useSelector(selectIsPLaying);
  const messages = useSelector(selectMessages);
  const handleChange = (e) => settext(e.target.value);
  const handleEnter = (e) => {
    dispatch(message({ name: "sarfaraj", text }));
    settext("");
  };

  return (
    <div>
      <div
        className={toggleclass(isPlaying, active)}
        onClick={() => setactive(!active)}
      >
        {active ? (
          <AiOutlineClose />
        ) : isPlaying ? (
          <BsFillChatDotsFill />
        ) : (
          <></>
        )}
      </div>
      <div className={active ? "menu active" : "menu"}>
        <h2>Chat Box</h2>

        <div className="chat-box-container">
          <div>
            {messages.map((message, index) => {
              return <Text key={index} obj={message} />;
            })}
          </div>
          <Input
            placeholder="message"
            value={text}
            onPressEnter={handleEnter}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
