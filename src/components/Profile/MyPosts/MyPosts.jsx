import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  Flex,
  Heading,
  Button,
  Textarea,
  Container,
  Box,
} from "@chakra-ui/react";

const MyPosts = (props) => {
  let postsElements = props.posts.map((posts) => (
    <Post post={posts.post} likesCount={posts.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch({ type: "ADD-POST" });
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = { type: "UPDATE-NEW-POST-TEXT", newText: text };
    props.dispatch(action);
  };

  return (
    <Container>
      <Heading color="white" as="h3" size="xl" noOfLines={1}>
        My posts
      </Heading>

      <Textarea
        w="500px"
        mb="5"
        mt="3"
        value={props.newPostText}
        onChange={onPostChange}
        ref={newPostElement}
      />

      <Flex>
        <Button colorScheme="purple" variant="solid" m="2" onClick={addPost}>
          Add post
        </Button>

        <Button colorScheme="purple" variant="solid" m="2">
          Remove post
        </Button>
      </Flex>

      <Box className={classes.postsBlock}>{postsElements}</Box>
    </Container>
  );
};

export default MyPosts;
