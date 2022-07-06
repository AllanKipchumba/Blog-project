import React from "react";
import MyPost from "../myPost/MyPost";
import "./posts.scss";

const Posts = ({ posts }) => {
  return (
    <>
      <div className="posts">
        {posts.map((post) => (
          <MyPost post={post} key={post._id} />
        ))}
      </div>
    </>
  );
};

export default Posts;
