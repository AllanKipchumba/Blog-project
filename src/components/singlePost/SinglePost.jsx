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
  const [tooltip, showTooltip] = useState(true);
  //update mode
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState();
  const [updateMode, setUpdateMode] = useState(false);

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
        await axios.delete("/posts/" + path, { headers });
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
  const updatePost = async () => {
    const updates = {
      title,
      description,
    };
    try {
      const res = await axios.patch("/posts/" + path, updates, { headers });
      // console.log(res);
      setUpdateMode(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="single-post">
        <div className="wrapper">
          {post.photo && <img src={post.photo} alt="/" className="image" />}

          {updateMode ? (
            <input
              type="text"
              placeholder={post.title}
              value={title}
              className="singlePostTitleInput"
              autoFocus
              onChange={(e) => setTitle(e.target.value)}
            />
          ) : (
            <h1>
              {post.title}
              {/* render edit and delete icons if post owner is the current user in state */}
              {owner === user?.user.username && (
                <div className="edit-btns">
                  <FiEdit
                    className="icon"
                    onClick={() => setUpdateMode(true)}
                    data-tip
                    data-for="editPost"
                    onMouseEnter={() => showTooltip(true)}
                    onMouseLeave={() => {
                      showTooltip(false);
                      setTimeout(() => showTooltip(true), 50);
                    }}
                  />
                  <BsTrash
                    className="icon"
                    onClick={deletePost}
                    // tooltip props
                    data-tip
                    data-for="deletePost"
                    onMouseEnter={() => showTooltip(true)}
                    onMouseLeave={() => {
                      showTooltip(false);
                      setTimeout(() => showTooltip(true), 50);
                    }}
                  />
                  {/* tooltip for delete */}
                  {tooltip && (
                    <ReactTooltip id="deletePost" place="top" effect="solid">
                      Delete post
                    </ReactTooltip>
                  )}
                  {/* tooltip for edit */}
                  {tooltip && (
                    <ReactTooltip id="editPost" place="top" effect="solid">
                      Edit post
                    </ReactTooltip>
                  )}
                </div>
              )}
            </h1>
          )}

          <div className="post-info">
            <Link to={`/?author=${owner}`}>
              <span>
                Author: <span>{owner}</span>
              </span>
            </Link>

            <span>{new Date(post.createdAt).toDateString()}</span>
          </div>

          {updateMode ? (
            <>
              <textarea
                className="singlePostDescInput"
                placeholder="Edit post body"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows="7"
                cols="50"
              />
              {/* edit button */}
              <div className="mt-10">
                <button className="editButton" onClick={updatePost}>
                  Update
                </button>
              </div>
            </>
          ) : (
            <p>{post.description}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default SinglePost;
