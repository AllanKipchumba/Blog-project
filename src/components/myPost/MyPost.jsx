import React from "react";
import "./myPost.scss";
import image from "./assets/cat.jpg";

const MyPost = () => {
  return (
    <>
      <div className="post">
        <img src={image} alt="/" className="image" />
        <div className="post-info">
          <div className="post-cats">
            <p>music</p>
            <p>life</p>
          </div>
          <h2>Lorem ipsum dolor sit amet.</h2>
          <hr />
          <span className="post-date">1 hour ago</span>
        </div>
      </div>
    </>
  );
};

export default MyPost;
