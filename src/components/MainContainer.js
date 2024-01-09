import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);
  return (
    <div className="col-span-11">
      <div
        className={`flex flex-wrap ${
          isMenuOpen ? "ml-48" : "ml-0"
        } p-5 overflow-y-auto`}
      >
        <ButtonList />
        <VideoContainer />
      </div>
    </div>
  );
};

export default MainContainer;
