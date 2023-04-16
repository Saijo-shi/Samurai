import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map((posts) => (
    <Post message={posts.post} likesCount={posts.likesCount} />
  ));
  let onPostChange = () => {
    let NewText = newPostElement.current.value;
    props.updateNewPostText(NewText);
  };
  let addPost = () => {
    props.addPost();
  };
  let newPostElement = React.createRef();
 

  return (
    <div>
      <h3 className={classes.postsHeader}>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
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
