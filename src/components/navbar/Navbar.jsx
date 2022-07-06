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
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isMobile, setIsmobile] = useState(false);

  // accesing user state in store
  const { user } = useSelector((store) => store["loggedIn"]);

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
          <li onClick={handleClick}>
            <Link to="/">home</Link>
          </li>
          {/* <li onClick={handleClick}>about</li>
          <li onClick={handleClick}>contact</li> */}
          <li onClick={handleClick}>
            <Link className="link" to="/write">
              write
            </Link>
          </li>
          {user && <li onClick={handleClick}>logout</li>}
        </ul>

        <div className="icons">
          <span>
            {user ? (
              <Link className="link" to="/settings">
                <FaUserAlt />
              </Link>
            ) : (
              <ul className="topList">
                <li className="topListItem">
                  <Link className="link" to="/login">
                    LOGIN
                  </Link>
                </li>
                <li className="topListItem">
                  <Link className="link" to="/register">
                    REGISTER
                  </Link>
                </li>
              </ul>
            )}
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
