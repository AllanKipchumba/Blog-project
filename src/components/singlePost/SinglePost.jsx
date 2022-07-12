import React, { useEffect, useState } from "react";
import "./singlePost.scss";
import { FiEdit } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

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

  // delete post
  const handleDelete = async () => {
    try {
      const token = user.token;
      const headers = { Authorization: `Bearer ${token}` };

      // send Bearer tokens along with axios
      axios.delete("/posts/" + path, { headers });
      alert(`Delete ${post.title}`);

      // redirect to home page
      window.location.replace("/posts");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="single-post">
        <div className="wrapper">
          {post.photo && <img src={post.photo} alt="/" className="image" />}
          <h1>
            {post.title}
            {/* rendr edit and delete icons if post owner is the current user in state */}
            {owner === user?.user.username && (
              <div className="edit-btns">
                <FiEdit className="icon" />
                <BsTrash className="icon" onClick={handleDelete} />
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
