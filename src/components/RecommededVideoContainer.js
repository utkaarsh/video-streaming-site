import React from "react";
import { formatCompactNumber } from "../utils/store/helper";

const RecommededVideoContainer = ({ data }) => {
  if (!data) {
    return <div>No details available.</div>;
  }
  console.log("Recommended", data);
  const { snippet, statistics } = data;
  const { title, channelTitle, publishedAt, thumbnails } = snippet;
  const { viewCount } = statistics;

  return (
    <div className="">
      <div className=" flex border border-white border-b-black mb-2 p-2 ">
        <div className="mx-2 ">
          <img
            src={thumbnails.default.url}
            className="rounded-xl w-[158px] h-[94px]"
            alt="video-icon"
          />
        </div>
        <div className="w-60 flex flex-col justify-start ml-2">
          <p className="font-bold">{title}</p>
          <p>{channelTitle}</p>
          <h4>
            {formatCompactNumber(viewCount)}+{" "}
            {(
              Math.abs(new Date(publishedAt) - new Date()) /
              (60 * 60 * 24 * 1000)
            ).toFixed(1)}{" "}
            days ago
          </h4>
        </div>
      </div>
    </div>
  );
};

export default RecommededVideoContainer;
