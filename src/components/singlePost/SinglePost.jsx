import React, { useEffect, useState } from "react";
import "./singlePost.scss";
import { FiEdit } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const SinglePost = () => {
  // access post id
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const [post, setPost] = useState({});
  const [owner, setOwner] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      const response = await axios.get("/posts/" + path);
      // console.log(response.data.post);
      setPost(response.data.post);
      setOwner(response.data.postOwner);
    };
    fetchPost();
  }, [path]);
  return (
    <>
      <div className="single-post">
        <div className="wrapper">
          {post.photo && <img src={post.photo} alt="/" className="image" />}
          <h1>
            {post.title}
            <div className="edit-btns">
              <FiEdit className="icon" />
              <BsTrash className="icon" />
            </div>
          </h1>
          <div className="post-info">
            <Link to={`/?author=${owner}`}>
              <span>
                Author: <span>{owner}</span>
              </span>
            </Link>

            <span>{new Date(post.createdAt).toDateString()}</span>
          </div>
          <p>{post.description}</p>
        </div>
      </div>
    </>
  );
};

export default SinglePost;
