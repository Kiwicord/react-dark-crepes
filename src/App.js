import React from "react";

import Home from "./Pages/Home";
import ProfilePage from "./Pages/ProfilePage";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Login from "./Pages/Login";

import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="wrapper">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
