import React from "react";
import { useSelector } from "react-redux";
import store from "../utils/store/store";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="p-5 shadow-lg w-48">
      <ul className="my-4">
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <h1 className="font-bold">Subscriptions</h1>
      <ul>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
        <li>Music</li>
      </ul>
      <h1 className="font-bold mt-2">Explore </h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Live</li>
        <li>Learning</li>
      </ul>
    </div>
  );
};

export default Sidebar;
