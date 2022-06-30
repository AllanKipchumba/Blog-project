import React from "react";
import MyPost from "../myPost/MyPost";
import "./posts.scss";

const Posts = ({ posts }) => {
  return (
    <>
      <div className="posts">
        {posts.map((post) => (
          <MyPost post={post} />
        ))}
      </div>
    </>
  );
};

export default Posts;
