import React from "react";

import FriendItem from "./Friends/FriendItem";
import { Box, Button, Container, Grid } from "@chakra-ui/react";

const Friends = (props) => {
  let FriendsElements = props.state.friends.map((friends) => (
    <FriendItem name={friends.name} id={friends.id} />
  ));
  return (
    <Grid>
      <Container>
        {FriendsElements}
        <Box w='900px'>
          <Button colorScheme="purple" variant="solid" m="2">
            Search friend
          </Button>
        </Box>
      </Container>
    </Grid>
  );
};
export default Friends;
