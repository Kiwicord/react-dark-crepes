import React from "react"
import ReactDom from "react-dom"
import './index.css'


function Nigger () {
  return (
    <div className="home-content">
      <h4>I hate NIGGERS</h4>
    </div>
  )
}

function Profile () {
  return (
    <div className="nav-profile">
      <a href='https://youtube.com' to='/'>
         <img src='https://cdn.discordapp.com/attachments/979283646571749396/1090292278607753256/br.png' alt='' width="50"/>
      </a>
    </div>
  )
}

function Navbar () {
  return (
    <div className="nav">
      <nav className='navG'>
        <ul>
          <a className='home-nav-css' href='home' to='/'>Home</a>
          <a href='about' to='/'>About</a>
          <a href='contact' to='/'>Contact</a>
          <Profile/>
        </ul>
        
      </nav>
    </div>
  )
}

function Cum() {
  return (
    <>
    <Navbar/>
    <Nigger/>
    </>
  )
}

ReactDom.render(<Cum/>,document.getElementById('root'))