import React from "react";
import Profile from "./Profile";

export default function Navbar() {
    return (
        <div className="nav">
          <nav>
            <ul>
              <a className='home-nav-css' href='home' to='/'>Home</a>
              <a href='about' to='/'>About</a>
              <a href='contact' to='/'>Contact</a>
              <Profile img_link='https://media.discordapp.net/attachments/978003347783159880/1055848692747346000/kc_weihnachts_logo.png'/>
            </ul>
          </nav>
        </div>
      )
}