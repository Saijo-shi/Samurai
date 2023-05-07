import React from "react";
import {
  Avatar,
  Container,
  Box,
  Card,
  CardBody,
  Text,
  Divider,
  IconButton,
} from "@chakra-ui/react";
import { BiLike, BiHeart } from "react-icons/bi";

const Post = (props) => {
  return (
    <Container m={[2, 3]}>
      <Avatar
        size="xl"
        name="Christian Nwamba"
        src="https://dumbosdiary.com/wp-content/uploads/2017/04/digital-painting-profile-pic.jpg"
      />
      <Box
        m={[2, 3]}
        display="flex"
        alignItems='end'
        justifyContent="space-between"
      >
        <Card m={[2, 3]}>
          <CardBody>
            <Box>
              <Text fontSize="xl">{props.post}</Text>
            </Box>
            <Divider />
            <Box display="flex">
              <Box>{<BiHeart />}</Box>
              <Text fontSize="xs"> {props.likesCount}</Text>
            </Box>
          </CardBody>
        </Card>
        <IconButton color="black" icon={<BiLike />} />
      </Box>
    </Container>
  );
};

export default Post;
