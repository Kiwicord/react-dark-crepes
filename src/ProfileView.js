import React from "react";

export default function ProfileView(props) {
    return (
        <div className="profile-view">
            <h2 className="profile-name">{props.profileName}</h2>
            <p>Friends: {props.friendsCount}</p>
        </div>
    )
}