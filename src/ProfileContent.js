import React from "react";

const ProfileContent = (props) => {
    return (
        <div>
            <img className="profile-pfp" src={props.profileImgLink} alt="" width={100}/>
            <h1 className="profile-username">Username: {props.username}</h1>
            <h1 className="profile-friends-count">Friends: {props.friendsCount}</h1>
        </div>
    )
}

export default ProfileContent;