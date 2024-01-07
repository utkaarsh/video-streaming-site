import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/store/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState("");
  console.log(searchQuery);
  useEffect(() => {
    //make a function which will make an api call after every key press
    //but of difference between 2 API calls <200ms then decline the API call
  });

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-10"
          src="https://icon-library.com/images/hamburger-menu-icon/hamburger-menu-icon-19.jpg"
          alt="menu"
          role="button"
          onClick={() => toggleMenuHandler()}
        />
        <a href="/">
          <img
            className="h-10"
            src="data:image/png;base64,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"
            alt="logo"
          />
        </a>
      </div>
      <div className="col-span-10 p-2">
        <input
          type="text"
          className="border border-gray-400 p-2 w-1/2 rounded-l-full"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="border border-gray-400 rounded-r-full py-2 px-4 bg-gray-100">
          search
        </button>
      </div>

      <div className="col-span-1">
        <img
          src="data:image/png;base64,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"
          className="h-8"
          l
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Head;
