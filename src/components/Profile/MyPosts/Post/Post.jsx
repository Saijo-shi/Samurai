import React from "react";
import { Container, Box, Image } from "@chakra-ui/react";

const Post = (props) => {
  return (
    <Container>
      <Box>
        <Image
          boxSize="80px"
          objectFit="cover"
          src="https://dumbosdiary.com/wp-content/uploads/2017/04/digital-painting-profile-pic.jpg"
          alt="avatar"
          m={[2, 3]}
        ></Image>
        {props.post}
      </Box>
      <span>Like{props.likesCount}</span>
    </Container>
  );
};

export default Post;
