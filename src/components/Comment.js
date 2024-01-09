import React from "react";
import user_icon from "../assets/user.png";
const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div>
      <div className="flex p-3 m-2 shadow-sm bg-gray-100 w-[950px] rounded-lg">
        <img src={user_icon} className="h-8 w-8" alt="user" />
        <div className="mx-2 px-2">
          <h1>{name}</h1>
          <h4>{text}</h4>
        </div>
      </div>
    </div>
  );
};

export default Comment;
