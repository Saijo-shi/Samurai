import {
  Textarea,
  Box,
  Container,
  Heading,
  Flex,
  Button,
} from "@chakra-ui/react";
import React from "react";
import Message from "./Message/Message";
import classes from "./../Dialogs.module.css";

const MyChats = (props) => {
  let chatsElements = props.state.dialogsPage.chats.map((chats) => (
    <Message
      chat={props.state.dialogsPage.chats.chat}
      newChatText={props.state.dialogsPage.newChatText}
      id={props.dialogsPage.chats.id}
    />
  ));

  let newChatElement = React.createRef();

  let addChat = () => {
    let text = newChatElement.current.value;
    props.addChat(text);
  };

  let onChatChange = () => {
    let text = newChatElement.current.value;
    props.updateNewChatText(text);
  };
  return (
    <Container>
      <Heading as="h3" size="lg">
        Create new message
      </Heading>
      <Box>
        className={classes.messages} {chatsElements}
      </Box>
      <Textarea
        w="500px"
        mb="5"
        mt="3"
        ref={newChatElement}
        onChange={onChatChange}
        value={props.newChatText}
      />
      <Flex>
        <Button colorScheme="purple" variant="solid" m="2" onClick={addChat}>
          Add chat
        </Button>
        <Button colorScheme="purple" m="2" variant="solid">
          Remove chat
        </Button>
      </Flex>
    </Container>
  );
};

export default MyChats;
