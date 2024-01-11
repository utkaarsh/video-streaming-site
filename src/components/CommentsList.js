import React from "react";
import Comment from "./Comment";

const CommentsList = ({ comments }) => {
  return (
    <div className="overflow-x-hidden">
      {comments.map((comment, i) => {
        return (
          <div>
            <Comment data={comment} key={i} />
            <div className="ml-2 p-2 border border-l-black">
              <CommentsList comments={comment.replies} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CommentsList;
