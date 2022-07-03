import React from "react";
import "./myPost.scss";
import { Link } from "react-router-dom";

const MyPost = ({ post }) => {
  return (
    <>
      <div className="post">
        {post.photo && <img className="postImg" src={post.photo} alt="" />}
        <div className="postInfo">
          <div className="postCats">
            {post.categories.map((category) => {
              <span className="postCat">
                <Link className="link" to="/posts?cat=Music">
                  {category.name}
                </Link>
              </span>;
            })}
          </div>
          <span className="postTitle">
            <Link to={`/post/${post._id}`} className="link">
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
