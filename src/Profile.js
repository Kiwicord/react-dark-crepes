import React from 'react'

export default function Profile(props) {
    return (
        <div className="nav-profile">
          <a href='https://youtube.com' to='/'>
             <img src={props.img_link} alt='' width="50"/>
          </a>
        </div>
      )
}