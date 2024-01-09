import React from "react";
import CommentsList from "./CommentsList";

const CommentsContainer = () => {
  const commentsData = [
    {
      name: "Utkarsh Ranpise",
      text: "Hey there this is a mock data for our comments section ",
      replies: [],
    },
    {
      name: "Utkarsh Ranpise",
      text: "Hey there this is a mock data for our comments section ",
      replies: [
        {
          name: "Utkarsh Ranpise",
          text: "Hey there this is a mock data for our comments section ",
          replies: [],
        },
        {
          name: "Utkarsh Ranpise",
          text: "Hey there this is a mock data for our comments section ",
          replies: [
            {
              name: "Utkarsh Ranpise",
              text: "Hey there this is a mock data for our comments section ",
              replies: [
                {
                  name: "Utkarsh Ranpise",
                  text: "Hey there this is a mock data for our comments section ",
                  replies: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Utkarsh Ranpise",
      text: "Hey there this is a mock data for our comments section ",
      replies: [],
    },
    {
      name: "Utkarsh Ranpise",
      text: "Hey there this is a mock data for our comments section ",
      replies: [],
    },
    {
      name: "Utkarsh Ranpise",
      text: "Hey there this is a mock data for our comments section ",
      replies: [],
    },
    {
      name: "Utkarsh Ranpise",
      text: "Hey there this is a mock data for our comments section ",
      replies: [
        {
          name: "Utkarsh Ranpise",
          text: "Hey there this is a mock data for our comments section ",
          replies: [
            {
              name: "Utkarsh Ranpise",
              text: "Hey there this is a mock data for our comments section ",
              replies: [
                {
                  name: "Utkarsh Ranpise",
                  text: "Hey there this is a mock data for our comments section ",
                  replies: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="m-5 p-3">
      <h1 className="text-xl font-bold">Comments :</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
