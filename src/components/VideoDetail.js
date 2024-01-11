import React from "react";
import likeIcon from "../assets/like.svg";
import disLikeIcon from "../assets/dislike.svg";
import shareIcon from "../assets/share.svg";
import downloadIcon from "../assets/download.svg";
import { formatCompactNumber } from "../utils/store/helper";

const VideoDetail = ({ details }) => {
  console.log("Details", details);
  if (!details || !details.snippet) {
    return <div>No details available.</div>;
  }
  const { snippet, statistics } = details;
  const { title, thumbnails, channelTitle } = snippet;
  const { viewCount, likeCount, dislikeCount } = statistics;
  return (
    <div className="flex-row mx-5 items-center">
      <h1 className="font-bold text-xl mx-2">{title ? title : ""}</h1>
      <div className="toolbox w-full  p-2 grid grid-flow-col  ">
        <div className="col-span-4 flex items-center">
          <img
            src={thumbnails.standard.url}
            className="w-10 items-center h-10 rounded-full mx-2"
            alt="profilepic"
          />
          <div className="mx-2">
            <h1 className="font-bold text-lg">
              {channelTitle ? channelTitle : ""}
            </h1>
            <h5 className="text-gray-700 text-xs">
              {formatCompactNumber(viewCount / 10) + " "} Subscribers
            </h5>
          </div>
          <button className="border border-black bg-black rounded-full px-3 py-2  mx-3 text-white cursor-pointer">
            Subscribe
          </button>
        </div>
        <div className="col-span-8 flex justify-end">
          <button className="border rounded-e-none  bg-gray-200 rounded-full p-2 flex ">
            <img src={likeIcon} alt="" />
            <p>{formatCompactNumber(likeCount ? likeCount : "")}</p>
          </button>
          <button className="border rounded-s-none  bg-gray-200 rounded-full px-4  ">
            <img src={disLikeIcon} alt="" />
            <p>{formatCompactNumber(dislikeCount ? dislikeCount : "")}</p>
          </button>
          <button className="border  bg-gray-200 rounded-full p-2 flex mx-2 ">
            <img src={shareIcon} alt="" />
            <p className="ml-2"> Download</p>
          </button>
          <button className="border  bg-gray-200 rounded-full p-2 flex mx-2 ">
            <img src={downloadIcon} alt="" />
            <p className="ml-1">Share</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
