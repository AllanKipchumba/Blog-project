import React from "react";
import "./header.scss";
import image from "./images/nature.jpg";

const Header = () => {
  return (
    <>
      <div className="header">
        <div>
          <p className="text-center">React & node</p>
          <h1>blog</h1>
        </div>
        <img src={image} alt="nature" className="image" />
      </div>
    </>
  );
};

export default Header;
