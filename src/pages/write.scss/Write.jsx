import React from "react";
import "./write.scss";
import { GrFormAdd } from "react-icons/gr";

const Write = () => {
  return (
    <>
      <div className="write">
        <form className="writeForm">
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
            />
          </div>
          <div className="formGroup">
            <textarea
              placeholder="Tell your story..."
              type="text"
              className="writeInput writeText"
            ></textarea>
          </div>
          <button className="writeSubmit">Publish</button>
        </form>
      </div>
    </>
  );
};

export default Write;
