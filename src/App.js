import React from "react";

import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Contact from './Pages/Contact'
import Navbar from "./Navbar";
import About from "./Pages/About";

import { Route, Routes } from "react-router-dom";

const App = () => {
    return(
        <>
        <Navbar/>
        <div className="wrapper">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/profile" element={<Profile/>}/>
            </Routes>
        </div>
        </>
    )
}

export default App;