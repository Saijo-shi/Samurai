import React from "react";
import { Container, Box, Button, Flex, Textarea } from "@chakra-ui/react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message";

const Dialogs = (props) => {
  let DialogsElements = props.dialogsPage.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let MessageElements = props.dialogsPage.messages.map((message) => (
    <Message message={message.message} id={message.id} />
  ));

  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.dispatch({ type: "ADD-MESSAGE" });
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    let action = { type: "UPDATE-NEW-MESSAGE-TEXT", newText: text };
    props.dispatch(action);
  };

  return (
    <Container maxW="2xl">
      <Box>{DialogsElements}</Box>
      <Flex>
        <Flex>
          <Textarea
            w="500px"
            mb="5"
            mt="3"
            mr="3"
            value={props.dialogsPage.newMessageText}
            ref={newMessageElement}
            onChange={onMessageChange}
          />
          <Button mt="3" colorScheme="purple" onClick={addMessage}>
            Send message
          </Button>
        </Flex>
      </Flex>
      <Box>{MessageElements}</Box>
    </Container>
  );
};

export default Dialogs;
