import React from "react";

const Button = ({ children }) => {
  return (
    <div>
      <button className="py-2 px-4 m-2 bg-gray-200 rounded-lg">
        {children}
      </button>
    </div>
  );
};

export default Button;
