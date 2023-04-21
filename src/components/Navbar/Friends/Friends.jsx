import React from "react";

import FriendItem from "./Friends/FriendItem";
import { Button, Container, Grid } from "@chakra-ui/react";

const Friends = (props) => {
  let FriendsElements = props.state.friends.map((friends) => (
    <FriendItem name={friends.name} id={friends.id} />
  ));
  return (
    <Grid>
      <Container>{FriendsElements}</Container>
      <Button colorScheme="purple" variant="solid" m="2">
        Search friend
      </Button>
    </Grid>
  );
};
export default Friends;
