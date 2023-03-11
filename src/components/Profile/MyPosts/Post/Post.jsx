import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  
  return (
    <div className={classes.item}>
      <img src="https://dumbosdiary.com/wp-content/uploads/2017/04/digital-painting-profile-pic.jpg"></img>
      {props.message}
      <div>

      <span>Like{props.likesCount}</span>
      </div>
    </div>
  );
};

export default Post;
