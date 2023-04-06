import React, { useState } from 'react'
import ProfileView from './ProfileView'

const Profile = (props) => {
    const [onHoverContent, setHoverContent] = useState(false)
    return (
        <div className="nav-profile" style={props.disabled ? {pointerEvents: "none", opacity: "0.4"} : {}}>
          <a href='profile' onMouseEnter={() => setHoverContent(true)} onMouseLeave={() => setHoverContent(false)}>
            {onHoverContent === true && <ProfileView profileName='Kiwious' friendsCount='1'/>}
            <img className='profile-img' src={props.img_link} alt='' width="50" />
          </a>
        </div>
      )
}

export default Profile;