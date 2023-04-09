import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map((posts) => (
    <Post message={posts.post} likesCount={posts.likesCount} />
  ));
  let newPostElement = React.createRef ();
  let addPost = () => {let text = newPostElement.current.value;
  alert (text)}
  return (
    <div>
      <h3 className={classes.postsHeader}>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
        <div>
          <button>Remove</button>
        </div>
      </div>
      <div className={classes.postsBlock}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
