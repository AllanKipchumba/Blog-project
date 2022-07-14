import React, { useState } from "react";
import "./settings.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import { BiUserCircle } from "react-icons/bi";
import { useSelector } from "react-redux";
import axios from "axios";

export const Settings = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState(null);
  const { user } = useSelector((store) => store["loggedIn"]);
  const token = user.token;
  const headers = { Authorization: `Bearer ${token}` };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.patch("/auth/profile", username, { headers });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="settings">
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsTitleUpdate">Update Your Account</span>
            <span className="settingsTitleDelete">Delete Account</span>
          </div>

          <form className="settingsForm" onSubmit={handleSubmit}>
            <label>Profile Picture</label>
            <div className="settingsPP">
              <img
                src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
              />

              <label htmlFor="fileInput">
                <BiUserCircle className="settingsPPIcon" />
              </label>

              <input
                id="fileInput"
                type="file"
                style={{ display: "none" }}
                className="settingsPPInput"
              />
            </div>

            <label>Username</label>
            <input
              type="text"
              placeholder={user.user.username}
              name="name"
              onChange={(e) => setUsername(e.target.value)}
            />

            <label>Email</label>
            <input
              type="email"
              placeholder={user.user.email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="change Password"
              name="password"
              onChange={(e) => setpassword(e.target.value)}
            />

            <button className="settingsSubmitButton" type="submit">
              Update
            </button>
          </form>
        </div>
        <Sidebar />
      </div>
    </>
  );
};
