import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let postsData = [
    {
      id: 1,
      post: "Hi, how are you?",
      likesCount:12,
    },
    {
      id: 2,
      post: "It's my first post",
      likesCount:23,
    },
    
  ];
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
        <Post message={postsData[0].post} likesCount={postsData[0].likesCount} />
        <Post message={postsData[1].post} likesCount={postsData[1].likesCount} />
    
      </div>
    </div>
  );
};

export default MyPosts;
