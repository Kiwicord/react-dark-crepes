import React from "react";
import Profile from "./Profile";
import './index.css'

export default function Navbar() {
    return (
        <div className="nav">
          <nav className='navG'>
            <ul>
              <a className='home-nav-css' href='home' to='/'>Home</a>
              <a href='about' to='/'>About</a>
              <a href='contact' to='/'>Contact</a>
              <Profile />
            </ul>
          </nav>
        </div>
      )
}