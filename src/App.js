import React from "react";

import MainContent from "./Pages/Home";
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
                <Route path="/" element={<MainContent/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/About" element={<About/>}/>
            </Routes>
        </div>
        </>
    )
}

export default App;