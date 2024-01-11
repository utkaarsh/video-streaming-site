import React from "react";
import RecommededVideoContainer from "./RecommededVideoContainer";
import { Link } from "react-router-dom";

const Recommend = ({ recommended }) => {
  return (
    <div className="h-[600px] overflow-y-scroll border border-black rounded-lg p-2">
      {recommended &&
        recommended.map((item, i) => (
          <Link
            key={item?.id}
            to={"/watch?v=" + item?.id}
            onClick={() => window.scroll(0, 0)}
          >
            <RecommededVideoContainer
              className="overflow-y-scroll"
              key={i}
              data={item}
            />
          </Link>
        ))}
    </div>
  );
};

export default Recommend;
