import React from "react";
import Profile from "./Profile";
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

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

const CustomLink = ({to, children, ...props}) => {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({path: resolvedPath.pathname, end: true})

  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} {...props}>{children}</Link>
    </li>
  )
}

export default Navbar;