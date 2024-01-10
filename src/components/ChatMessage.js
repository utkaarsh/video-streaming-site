import React from "react";
import user_icon from "../assets/user.png";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-start shadow-sm p-2 grid grid-flow-col">
      <div className=" flex w-28">
        <img src={user_icon} className="h-6 w-6" alt="user" />
        <span className="font-bold px-2 ">{name}</span>
      </div>
      <div className="col-span-12 justify-start items-start  ml-0">
        <span className=" items-start ml-0">{message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
