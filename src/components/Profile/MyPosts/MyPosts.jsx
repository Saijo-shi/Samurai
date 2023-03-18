import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let posts = [
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
    {
      id: 3,
      post: "Goin outdoors",
      likesCount:12,
    },
    {
      id: 4,
      post: "Just doin HW",
      likesCount:23,
    },
      ];
      let postsElements = posts.map ((posts) => (
        <Post message={posts.post} likesCount={posts.likesCount} />
      ));
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
        {postsElements}
    
      </div>
    </div>
  );
};

export default MyPosts;
