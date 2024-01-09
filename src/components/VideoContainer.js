import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/store/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [video, setVideo] = useState();
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideo(json?.items);
  };

  return (
    <div className="flex flex-wrap ">
      {video
        ? video.map((video) => (
            <Link to={"watch?v=" + video.id} key={video.id}>
              <VideoCard info={video} />
            </Link>
          ))
        : null}
    </div>
  );
};

export default VideoContainer;
