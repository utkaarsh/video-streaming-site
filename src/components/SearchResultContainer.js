import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../utils/store/constants";
import { formatPublishedDate } from "../utils/store/helper";

const SearchResultContainer = () => {
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search_query");
  const [searchedVideos, setSearchedVideos] = useState([]);
  // const id = searchedVideos?.id.videoId;
  console.log(
    "search Res",
    searchedVideos.map((i) => i.id.videoId)
  );

  useEffect(() => {
    fetchSearchData();
  }, [searchQuery]);
  const fetchSearchData = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const Json = await data.json();
    setSearchedVideos(Json?.items);
  };

  return (
    <div>
      <div
        className={`flex flex-wrap ${
          isMenuOpen ? "ml-48 " : "ml-0"
        } p-5 overflow-y-auto `}
      >
        {searchedVideos
          ? searchedVideos.map((video) => (
              <Link to={`/watch?v=${video.id.videoId}`} key={video.id.videoId}>
                <VideoContainer data={video?.snippet} />
              </Link>
            ))
          : null}
      </div>
    </div>
  );
};

const VideoContainer = ({ data }) => {
  const searchRes = data;
  console.log("data", data);

  if (!data) return <h2 className="m-2">No data available</h2>;

  const { thumbnails, title, channelTitle, publishedAt, description } =
    searchRes;
  const formattedDate = formatPublishedDate(publishedAt);

  return (
    <div className="flex p-5 m-2">
      <img className="w-80  rounded-lg" src={thumbnails?.high.url} alt="" />
      <div className="mx-2 leading-10 px-2">
        <h2 className="font-bold text-2xl">{title}</h2>
        <div className="font-light text-xl ">
          <h4>{channelTitle}</h4>
          <h4>{formattedDate}</h4>
          <h4>{description}</h4>
        </div>
      </div>
    </div>
  );
};
export default SearchResultContainer;
