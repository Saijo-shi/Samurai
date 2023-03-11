import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
        <img
          className={classes.profileImg}
          src="https://damion.club/uploads/posts/2022-01/1642314871_26-damion-club-p-foni-dlya-oformleniya-sotsialnikh-setei-27.jpg"
          alt="main_image"
        ></img>
        <div className={classes.profileMenu}>
          <div>ava+description</div>
        </div>
        <MyPosts/>
      </div>
    </div>
  );
};

export default Profile;
