import React from "react";
import MyPost from "../myPost/MyPost";
import "./posts.scss";

const Posts = () => {
  return (
    <>
      <div className="posts">
        <MyPost />
        <MyPost />
        <MyPost />
        <MyPost />
        <MyPost />
      </div>
    </>
  );
};

export default Posts;
