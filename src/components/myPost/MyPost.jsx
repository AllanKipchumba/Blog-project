import React from "react";
import "./myPost.scss";
import image from "./assets/cat.jpg";
import { Link } from "react-router-dom";

const MyPost = ({ post }) => {
  return (
    <>
      <div className="post">
        <img className="postImg" src={image} alt="" />
        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">
              <Link className="link" to="/posts?cat=Music">
                Music
              </Link>
            </span>
            <span className="postCat">
              <Link className="link" to="/posts?cat=Music">
                Life
              </Link>
            </span>
          </div>
          <span className="postTitle">
            <Link to="/post/abc" className="link">
              {post.title}
            </Link>
          </span>
          <hr />
          <span className="postDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="postDesc">{post.description}</p>
      </div>
    </>
  );
};

export default MyPost;
