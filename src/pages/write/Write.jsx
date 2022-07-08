import React, { useState } from "react";
import "./write.scss";
import { GrFormAdd } from "react-icons/gr";
import { useSelector } from "react-redux";
import axios from "axios";

const Write = () => {
  const [title, seTitle] = useState("");
  const [description, setDescription] = useState("");
  const { user } = useSelector((store) => store["loggedIn"]);
  const token = user.token;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      title,
      description,
    };

    const headers = { Authorization: `Bearer ${token}` };

    try {
      const res = await axios.post("/posts", newPost, { headers });
      window.location.replace("/post/" + res.data._id);
      // console.log(res.data._id);
    } catch (error) {
      throw new Error();
    }
  };

  // const token = user.data.id; /*take only token and save in token variable*/
  // axios.get(api , { headers: {"Authorization" : `Bearer ${token}`} })
  // .then(res => {
  // console.log(res.data);
  // .catch((error) => {
  //   console.log(error)
  // });

  return (
    <>
      <div className="write">
        <form className="writeForm" onSubmit={handleSubmit}>
          <img
            className="writeImg"
            src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <div>
            <label htmlFor="fileInput">
              {" "}
              <GrFormAdd className="writeIcon" />
            </label>
            <input
              type="file"
              name="file"
              id="fileInput"
              style={{ display: "none" }}
            />

            <input
              type="text"
              placeholder="title"
              className="writeInput"
              autoFocus={true}
              onChange={(e) => seTitle(e.target.value)}
            />
          </div>

          <div className="formGroup">
            <textarea
              placeholder="Tell your story..."
              type="text"
              className="writeInput writeText"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <button className="writeSubmit" type="submit">
            Publish
          </button>
        </form>
      </div>
    </>
  );
};

export default Write;
