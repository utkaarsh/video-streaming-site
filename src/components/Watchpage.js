import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/store/appSlice";
import { useSearchParams } from "react-router-dom";
import { VIDEO_API } from "../utils/store/constants";
import CommentsContainer from "./CommentsContainer";

const Watchpage = () => {
  const [searchParams] = useSearchParams();
  // console.log("Search Params", searchParams.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    getVideoApi();
    dispatch(closeMenu());
  }, []);

  const getVideoApi = async () => {
    const data = await fetch(VIDEO_API);
    const json = await data.json();
    // console.log("JSON", json);
  };

  return (
    <div className="flex flex-col">
      <div>
        <iframe
          className="px-5 py-2 m-2"
          width="1000"
          height="500"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default Watchpage;
