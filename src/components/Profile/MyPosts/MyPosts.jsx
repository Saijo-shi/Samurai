import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      <h3 className={classes.postsHeader}>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
        <div>
          <button>Remove</button>
        </div>
      </div>
      <div className={classes.postsBlock}>
        <Post message="Hi, how are you?" likesCount="12" />
        <Post message="It's my first post" likesCount="23" />
        <Post message="Goin outdoors" likesCount="2" />
      </div>
    </div>
  );
};

export default MyPosts;
