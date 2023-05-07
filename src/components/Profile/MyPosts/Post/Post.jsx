import React from "react";
import { Container, Box, Image } from "@chakra-ui/react";

const Post = (props) => {
  return (
    <Container>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Image
          boxSize="80px"
          objectFit="cover"
          src="https://dumbosdiary.com/wp-content/uploads/2017/04/digital-painting-profile-pic.jpg"
          alt="avatar"
          m={[2, 3]}
        ></Image>
        <Box>{props.post}</Box>
        <Box>Likes {props.likesCount}</Box>
      </Box>
    </Container>
  );
};

export default Post;
