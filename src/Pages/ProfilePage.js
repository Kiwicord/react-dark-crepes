import React from "react";
import ProfileContent from "../ProfileContent";
import Navbar from "../Navbar";

const ProfilePage = () => {
  return (
    <>
      <Navbar />
      <ProfileContent
        profileImgLink="https://media.discordapp.net/attachments/978003347783159880/1055848692747346000/kc_weihnachts_logo.png"
        username="Kiwious"
        friendsCount="0"
      />
    </>
  );
};

export default ProfilePage;
