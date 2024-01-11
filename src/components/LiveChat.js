import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/store/chatSlice";
import {
  generateRandomMessage,
  generateRandomName,
} from "../utils/store/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const [liveMessage, setLiveMessage] = useState("");
  useEffect(() => {
    setInterval(() => {
      // console.log("API Polling");
      dispatch(
        addMessages({
          name: generateRandomName(),
          message: generateRandomMessage(),
        })
      );
    }, 1500);
  }, []);
  //   const chatMessages = useSelector((store) => store.chat.message);
  return (
    <div>
      <div className=" bg-slate-100 rounded-lg rounded-b-none mx-2 p-2 border border-black w-full h-[500px] overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessages({
              name: "Utkarsh",
              message: liveMessage,
            })
          );
          setTimeout(() => {
            setLiveMessage("");
          }, 0);
        }}
        className=" rounded-lg border border-t-transparent rounded-t-none border-black w-full p-2 mx-2"
      >
        <input
          className="border border-black w-[350px] px-2"
          type="text"
          placeholder="Enter chat"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button
          type="submit"
          className="border border-black border-l-transparent px-2 bg-gray-200"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
