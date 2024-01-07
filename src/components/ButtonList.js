import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Recently Uploaded",
    "Live",
    "Combat Sports",
    "Geo Ploitics",
    "SUVS",
    "Bikes",
    "Computer Science",
    "Mechanics",
    "More",
  ];
  return (
    <div className="flex">
      {list ? list.map((item, i) => <Button key={i}>{item} </Button>) : null}
    </div>
  );
};

export default ButtonList;
