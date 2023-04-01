import React from "react";
import './styles/profileview.css'

export default function ProfileView(props) {
    return (
        <div className="profile-view">
            <h1>{props.profileName}</h1>
            <img src={props.profileImage} alt="profilepfp" />
        </div>
    )
}