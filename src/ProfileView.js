import React from "react";

const ProfileView = (props) => {
    return (
        <div className="profile-view">
            <h2 className="profile-name">{props.profileName}</h2>
            <p>Friends: {props.friendsCount}</p>
        </div>
    )
}

export default ProfileView;