import React from "react";

import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          className={classes.profileImg}
          src="https://damion.club/uploads/posts/2022-01/1642314871_26-damion-club-p-foni-dlya-oformleniya-sotsialnikh-setei-27.jpg"
          alt="main_image"
        ></img>
        <div className={classes.descriptionBlock}>
          <div>ava+description</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
