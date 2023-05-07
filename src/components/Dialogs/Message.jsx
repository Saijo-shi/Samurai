import React from "react";

import { Image, Box, Container, Flex } from "@chakra-ui/react";

const Message = (props) => {
  return (
    <Container>
      <Flex>
        <Box>
          <Image
            m={[2, 3]}
            boxSize="80px"
            objectFit="cover"
            src="https://dumbosdiary.com/wp-content/uploads/2017/04/digital-painting-profile-pic.jpg"
            alt="avatar"
          ></Image>
        </Box>
        <Box m={[2, 3]}>{props.message}</Box>
      </Flex>
    </Container>
  );
};

export default Message;
