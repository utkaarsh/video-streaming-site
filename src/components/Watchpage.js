import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/store/appSlice";
import { useSearchParams } from "react-router-dom";
import { VIDEO_API, WATCH_VIDEO_API } from "../utils/store/constants";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const Watchpage = () => {
  const [searchParams] = useSearchParams();
  // console.log("Search Params", searchParams.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    getVideoApi();
    watchVideo();
    dispatch(closeMenu());
  }, []);
  const watchVideo = async () => {
    const data1 = await fetch(WATCH_VIDEO_API);
    const Json = await data1.json();
    console.log("WATCH DATA", Json);
  };

  const getVideoApi = async () => {
    const data = await fetch(VIDEO_API);
    const json = await data.json();
    // console.log("JSON", json);
  };

  return (
    <div className="flex flex-col ">
      <div className="flex mx-3 ">
        <div>
          <iframe
            className="px-5 py-2 m-2"
            width="1000"
            height="550"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-2 w-full">
          <LiveChat />
        </div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default Watchpage;
