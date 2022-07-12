import React, { useEffect, useState } from "react";
import "./singlePost.scss";
import { FiEdit } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ReactTooltip from "react-tooltip";

const SinglePost = () => {
  // access post id
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const [post, setPost] = useState({});
  const [owner, setOwner] = useState("");
  const { user } = useSelector((store) => store["loggedIn"]);

  // get individual posts by ID
  useEffect(() => {
    const fetchPost = async () => {
      const response = await axios.get("/posts/" + path);
      setPost(response.data.post);
      setOwner(response.data.postOwner);
    };
    fetchPost();
  }, [path]);

  const token = user.token;
  const headers = { Authorization: `Bearer ${token}` };

  // delete post
  const deletePost = async () => {
    try {
      // notify user of the deletion
      if (window.confirm(`Delete ${post.title}?`)) {
        // send Bearer tokens along with axios
        axios.delete("/posts/" + path, { headers });
      } else {
        return false;
      }

      // redirect to home page
      window.location.replace("/posts");
    } catch (error) {
      console.log(error);
    }
  };

  // update Post
  const updatePost = async () => {};

  return (
    <>
      <div className="single-post">
        <div className="wrapper">
          {post.photo && <img src={post.photo} alt="/" className="image" />}
          <h1>
            {post.title}
            {/* render edit and delete icons if post owner is the current user in state */}
            {owner === user?.user.username && (
              <div className="edit-btns">
                <FiEdit className="icon" onClick={updatePost} />
                <BsTrash
                  className="icon"
                  onClick={deletePost}
                  data-tip
                  data-for="deletePost"
                />
                <ReactTooltip id="deletePost" place="top" effect="solid">
                  Delete post
                </ReactTooltip>
              </div>
            )}
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
