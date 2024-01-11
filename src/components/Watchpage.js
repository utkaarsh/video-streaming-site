import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/store/appSlice";
import { useSearchParams } from "react-router-dom";
import {
  VIDEO_API,
  YOUTUBE_VIDEO_API,
  YOUTUBE_VIDEO_WATCH_API,
} from "../utils/store/constants";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import VideoDetail from "./VideoDetail";
import RecommededVideoContainer from "./RecommededVideoContainer";
import Recommend from "./Recommend";

const Watchpage = () => {
  const [details, setDetails] = useState("");
  const [recommended, setRecommended] = useState("");
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");
  // console.log("Search Params", searchParams.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    getVideoApi();
    dispatch(closeMenu());
  }, []);

  const getVideoApi = async () => {
    const data = await Promise.all([
      fetch(YOUTUBE_VIDEO_WATCH_API + id),
      fetch(YOUTUBE_VIDEO_API),
    ]);
    const json1 = await data[0].json();
    const json2 = await data[1].json();
    const videoDetails = json1.items[0];
    const recVideos = json2.items;
    setDetails(videoDetails);
    setRecommended(recVideos);
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
      <div className="flex mx-3">
        <CommentsContainer />
        <div className="p-2 w-full">
          <h1 className="font-bold mb-3 text-xl">Recommeded</h1>

          <Recommend recommended={recommended} />
        </div>
      </div>
    </div>
  );
};

export default Watchpage;
