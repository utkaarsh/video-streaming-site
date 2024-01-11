import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/store/appSlice";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_VIDEO_WATCH_API } from "../utils/store/constants";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import VideoDetail from "./VideoDetail";

const Watchpage = () => {
  const [details, setDetails] = useState("");
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");
  // console.log("Search Params", searchParams.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    getVideoApi();
    dispatch(closeMenu());
  }, []);

  const getVideoApi = async () => {
    const data = await fetch(YOUTUBE_VIDEO_WATCH_API + id);
    const json = await data.json();
    const videoDetails = json.items[0];
    setDetails(videoDetails);
    console.log("json", json);
  };

  return (
    <div className="flex flex-col ">
      <div className="flex mx-3 ">
        <div>
          <iframe
            className="px-5 py-2 m-2"
            width="1000"
            height="550"
            src={"https://www.youtube.com/embed/" + id}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          <VideoDetail details={details ? details : ""} />
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
