import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import { Settings } from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write.scss/Write";

const App = () => {
  return (
    <>
      <Navbar />
      <div>
        {/* <Home /> */}
        {/* <Single /> */}
        {/* <Write /> */}
        <Settings />
      </div>
    </>
  );
};

export default App;
