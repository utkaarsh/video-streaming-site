import React from "react";
import Comment from "./Comment";

const CommentsList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, index) => {
        return (
          <div>
            <Comment key={index} data={comment} />
            <div className="ml-2 p-5 border border-white border-l-black">
              <Comment key={index} data={comment} />
              <Comment key={index} data={comment} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CommentsList;
