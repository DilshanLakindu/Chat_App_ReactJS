import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  console.log(message);
  return (
    <div className="message owner">
      {/* <div className="messageInfo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSucjoeTIFRgKG9T2E2Bsnv90UHWc3taieOYQ&usqp=CAU"
          alt=""
        />
        <span> just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSucjoeTIFRgKG9T2E2Bsnv90UHWc3taieOYQ&usqp=CAU"
          alt=""
        />
      </div> */}
    </div>
  );
};

export default Message;
