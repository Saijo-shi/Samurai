import React from "react";
import { Heading, Flex, Button, Textarea, Container } from "@chakra-ui/react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let DialogsElements = props.state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = props.state.messages.map((message) => (
    <Message message={message.message} id={props.state.messages.id} />
  ));

  let newMessageElement = React.createRef();
  let addMessage = () => {
    props.addMessage();
  };

  let onMessageChange = () => {
    let NewMessage = newMessageElement.current.value;
    props.updateNewMessageText(NewMessage);
  };

  return (
    <Container>
      <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>{DialogsElements}</div>
        <div className={classes.messages}>{messagesElements}</div>
      </div>
      <div>
        <Heading as="h3" size="lg">
          Create new message
        </Heading>
        <div>
          <div>
            <Textarea
              w="500px"
              mb="5"
              mt="3"
              ref={newMessageElement}
              onChange={onMessageChange}
              value={props.newMessageText}
            />
          </div>
          <Flex>
            <Button
              colorScheme="purple"
              variant="solid"
              m="2"
              onClick={addMessage}
            >
              Add message
            </Button>
            <Button colorScheme="purple" m="2" variant="solid">
              Remove message
            </Button>
          </Flex>
        </div>
      </div>
    </Container>
  );
};

export default Dialogs;
