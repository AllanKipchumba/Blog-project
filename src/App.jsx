import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { Settings } from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const currentUser = false;
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Home />} />
        <Route path="/post/:id" element={<Single />} />
        <Route path="/write" element={currentUser ? <Write /> : <Login />} />
        <Route
          path="/settings"
          element={currentUser ? <Settings /> : <Login />}
        />
        <Route path="/login" element={currentUser ? <Home /> : <Login />} />
        <Route
          path="/register"
          element={currentUser ? <Home /> : <Register />}
        />
      </Routes>
    </>
  );
};

export default App;
