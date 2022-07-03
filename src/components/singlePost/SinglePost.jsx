import React, { useEffect, useState } from "react";
import "./singlePost.scss";
import { FiEdit } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import axios from "axios";

const SinglePost = () => {
  const location = useLocation();
  // access post id
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchPost = async () => {
      const response = await axios.get("/posts/" + path);
      // console.log(response.data);
      setPost(response.data);
    };
    fetchPost();
  }, [path]);
  return (
    <>
      <div className="single-post">
        <div className="wrapper">
          {post.photo && (
            <img src={post.post.photo} alt="/" className="image" />
          )}
          <h1>
            {post.post.title}
            <div className="edit-btns">
              <FiEdit className="icon" />
              <BsTrash className="icon" />
            </div>
          </h1>
          <div className="post-info">
            <span>
              Author: <span>{post.postOwner}</span>
            </span>
            <span>{new Date(post.post.createdAt).toDateString()}</span>
          </div>
          <p>{post.post.description}</p>
        </div>
      </div>
    </>
  );
};

export default SinglePost;
