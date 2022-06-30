import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.scss";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get("/posts");
      // console.log(response.data);
      setPosts(response.data);
    };
    fetchPosts();
  }, []);
  return (
    <>
      <div>
        <Header />
        <div className="home">
          <Posts posts={posts} />
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default Home;
