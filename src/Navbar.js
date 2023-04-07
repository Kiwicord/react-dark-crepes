import React from "react";
import Profile from "./ProfileButton";
import CustomLink from "./CustomLink";

const Navbar = () => {
    return (
        <div className="nav">
          <nav>
            <ul>
              <CustomLink className='home-nav-css' to='/'>Home</CustomLink>
              <CustomLink to='/about'>About</CustomLink>
              <CustomLink to='/contact'>Contact</CustomLink>
              <Profile img_link='https://media.discordapp.net/attachments/978003347783159880/1055848692747346000/kc_weihnachts_logo.png'/>
            </ul>
          </nav>
        </div>
      )
}

export default Navbar;