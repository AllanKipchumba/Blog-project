import React from "react";
import "./sidebar.scss";
import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";
import {
  FaPinterestSquare,
  FaInstagramSquare,
  FaUserAlt,
} from "react-icons/fa";
import image from "./assets/image.jpg";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div>
          <span>about me</span>
          <img className="image" src={image} alt="/" />
          <p>Lorem ipsur dolor sit amet</p>
        </div>
        <div>
          <span>categories</span>
          <ul className="sidebar-list">
            <li>life</li>
            <li>music</li>
            <li>style</li>
            <li>sport</li>
            <li>tech</li>
            <li>cinema</li>
          </ul>
        </div>
        <div>
          <span>follow us</span>
          <div className="sidebar-icons">
            <AiFillFacebook className="icons" />
            <AiFillTwitterSquare className="icons" />
            <FaPinterestSquare className="icons" />
            <FaInstagramSquare className="icons" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
