import React from "react";

const VideoCard = ({ info }) => {
  const data = info;
  if (!data) return <h2>No Data available</h2>;
  const { snippet, statistics } = data;
  const { channelTitle, title, thumbnails } = snippet;
  const { viewCount } = statistics;

  return (
    <div className="p-2 m-2 w-72 shadow-lg ">
      <img
        className="rounded-lg"
        src={thumbnails?.medium?.url}
        alt="video-thumbnail"
      />
      <ul>
        <li className="font-bold">{title}</li>
        <li>{channelTitle}</li>
        <li>{viewCount} Views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
