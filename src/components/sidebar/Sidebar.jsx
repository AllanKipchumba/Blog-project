import React, { useEffect, useState } from "react";
import "./sidebar.scss";
import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";
import {
  FaPinterestSquare,
  FaInstagramSquare,
  FaUserAlt,
} from "react-icons/fa";
import image from "./assets/image.jpg";
import axios from "axios";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
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
            {cats.map((cat) => (
              <Link to={`/?cat=${cat.name}`}>
                <li key={cat._id}> {cat.name}</li>
              </Link>
            ))}
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
