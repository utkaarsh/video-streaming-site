import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/store/appSlice";
import { SEARCH_SUGGESTION_API } from "../utils/store/constants";
import { json, useNavigate } from "react-router-dom";
import { cacheResult } from "../utils/store/searchSlice";
import hamBurger from "../assets/hamburger.svg";
import youtubeIcon from "../assets/youtube.svg";
import bellIcon from "../assets/bell.svg";
import createIcon from "../assets/create.svg";

const Head = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const cachedSearch = useSelector((store) => store.search);
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  useEffect(() => {
    //make a function which will make an api call after every key press
    //but of difference between 2 API calls <200ms then decline the API call
    //debouncing
    const timer = setTimeout(() => {
      if (cachedSearch[searchQuery]) {
        setSuggestion(cachedSearch[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    // console.log("API call -", searchQuery);

    const data = await fetch(SEARCH_SUGGESTION_API + searchQuery);
    const json = await data.json();
    setSuggestion(json[1]);
    //update the cache
    dispatch(
      cacheResult({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleSuggestions = (e) => {
    setSearchQuery(e.target.innerText);
    setShowSuggestion(false);
    navigate("/results?search_query=" + encodeURI(e.target.innerText));
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-white">
      <div className="grid grid-flow-col p-5 m-2 shadow-lg items-center ">
        <div className="flex col-span-1">
          <img
            className="h-8"
            src={hamBurger}
            alt="menu"
            role="button"
            onClick={() => toggleMenuHandler()}
          />
          <a href="/">
            <img className="h-7 mx-3 px-2" src={youtubeIcon} alt="logo" />
          </a>
        </div>
        <div className="col-span-10 p-2">
          <div className="flex flex-row relative">
            <input
              type="text"
              className="border border-gray-400 p-2 w-1/2 rounded-l-full"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestion(true)}
              onBlur={() => setShowSuggestion(false)}
            />
            <button className="border border-gray-400 rounded-r-full py-2 px-4 bg-gray-100">
              <img
                alt="search-icon"
                className="h-5 mx-auto"
                src="https://cdn-icons-png.flaticon.com/512/482/482631.png"
              />
            </button>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute hover:bg-gray-200 hover:rounded-full w-9 h-9 right-[33.2rem] top-[2px]"
              >
                X
              </button>
            )}
            {showSuggestion && searchQuery && (
              <div
                onScroll={() => setShowSuggestion(false)}
                className="mt-12 absolute bg-white w-[33.4rem] p-3 rounded-md shadow-lg cursor-pointer"
              >
                <ul className="">
                  {showSuggestion &&
                    suggestion.map((items, i) => (
                      <li
                        onMouseDown={(e) => handleSuggestions(e)}
                        className="hover:bg-gray-300"
                        key={i}
                      >
                        {items}
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="w-10 h-10 hover:rounded-full hover:bg-gray-100  cursor-pointer relative">
          <img className="mt-2 ml-2" alt="bell-icon " src={bellIcon} />
          <div className="absolute bg-red-700 text-white w-6 h-5 rounded-2xl border-2 border-white top-[3px] left-5 text-xs text-center">
            9+
          </div>
        </div>
        <div className="w-10 h-10 hover:rounded-full hover:bg-gray-100  cursor-pointer">
          <img className="mt-2 ml-2" alt="create-icon " src={createIcon} />
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
    </div>
  );
};

export default Head;
