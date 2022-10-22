import React from "react";

const CommentsList = ({ comments }) => {
  return (
    <>
      <h3>Comments:</h3>
      {comments
        .slice(0)
        .reverse()
        .map((comment, index) => (
          <div className="comment" key={index}>
            <h4>{comment.postedBy}</h4>
            <p>{comment.text}</p>
          </div>
        ))}
    </>
  );
};

export default CommentsList;
