import React from "react";

import { Avatar, Box, Container, Card, CardBody, Text } from "@chakra-ui/react";

const Message = (props) => {
  return (
    <Container>
      <Box
        m={[2, 3]}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
         <Avatar
        size="xl"
        name="Christian Nwamba"
        src="https://dumbosdiary.com/wp-content/uploads/2017/04/digital-painting-profile-pic.jpg"
      />
        <Card>
          <CardBody>
            <Text>{props.message}</Text>
          </CardBody>
        </Card>
      </Box>
    </Container>
  );
};

export default Message;
