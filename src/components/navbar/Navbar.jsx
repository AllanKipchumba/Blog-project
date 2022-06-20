import React, { useState } from "react";
import "./navbar.scss";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiOutlineSearch,
  AiOutlineClose,
  AiOutlineMenu,
} from "react-icons/ai";
import {
  FaPinterestSquare,
  FaInstagramSquare,
  FaUserAlt,
} from "react-icons/fa";
const Navbar = () => {
  const [isMobile, setIsmobile] = useState(false);

  const handleClick = () => setIsmobile(false);
  return (
    <>
      <nav className="navbar">
        <div className="social-media-links">
          <span>
            <AiFillFacebook />
          </span>
          <span>
            <AiFillTwitterSquare />
          </span>
          <span>
            <FaPinterestSquare />
          </span>
          <span>
            <FaInstagramSquare />
          </span>
        </div>
        <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
          <li>home</li>
          <li>about</li>
          <li>contact</li>
          <li>write</li>
          <li>logout</li>
        </ul>
        <div className="icons">
          <span>
            <FaUserAlt />
          </span>
          <span>
            <AiOutlineSearch />
          </span>
        </div>

        <button
          className="mobile-menu-icon"
          onClick={() => setIsmobile(!isMobile)}
        >
          {isMobile ? (
            <AiOutlineClose size={30} />
          ) : (
            <AiOutlineMenu size={30} />
          )}
        </button>
      </nav>
    </>
  );
};

export default Navbar;
