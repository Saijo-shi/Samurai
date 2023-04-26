import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Flex, Heading, Button, Textarea } from "@chakra-ui/react";

const MyPosts = (props) => {
  let postsElements = props.posts.map((posts) => (
    <Post message={posts.post} likesCount={posts.likesCount} />
  ));
  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  };
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div>
      <Heading color="white" as="h3" size="xl" noOfLines={1}>
        My posts
      </Heading>
      <div>
        <div>
          <Textarea
            w="500px"
            mb="5"
            mt="3"
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <Flex>
          <Button colorScheme="purple" variant="solid" m="2" onClick={addPost}>
            Add post
          </Button>

          <Button colorScheme="purple" variant="solid" m="2">
            Remove post
          </Button>
        </Flex>
      </div>
      <div className={classes.postsBlock}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
