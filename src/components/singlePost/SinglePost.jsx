import React from "react";
import "./singlePost.scss";
import image from "./assets/cat.jpg";
import { FiEdit } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";

const SinglePost = () => {
  return (
    <>
      <div className="single-post">
        <div className="wrapper">
          <img src={image} alt="/" className="image" />
          <h1>Lorem ipsur dolor sit amet</h1>
          <div className="edit-btns">
            <FiEdit />
            <BsTrash />
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePost;
