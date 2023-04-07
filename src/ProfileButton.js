import React from 'react'
import CustomLink from "./CustomLink";

const Profile = (props) => {
    return (
        <div className="nav-profile">
          <CustomLink to='/profile'>
            <img className='profile-img' src={props.img_link} alt='' width="50" />
          </CustomLink>
        </div>
      )
}

export default Profile;