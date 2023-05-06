import React from "react";
import classes from "./Dialogs.module.css";
import { Box, Container, Flex } from "@chakra-ui/react";

const Message = (props) => {
  return (
    <Container className={classes.message}>
      <Flex>
        <Box>
          <img
            src="https://dumbosdiary.com/wp-content/uploads/2017/04/digital-painting-profile-pic.jpg"
            alt="avatar"
          ></img>
        </Box>
        <Box>{props.message}</Box>
      </Flex>

     
    </Container>
  );
};

export default Message;
