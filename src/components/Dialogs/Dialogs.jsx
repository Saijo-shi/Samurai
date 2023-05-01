import React from "react";
import { Container, Box } from "@chakra-ui/react";
import classes from "./Dialogs.module.css";
import DialogItem from "./MyChats/DialogItem/DialogItem";
import MyChats from "./MyChats/MyChats";

const Dialogs = (props) => {
  let DialogsElements = props.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  return (
    <Container>
      <Box>className={classes.dialogs} </Box>
      <Box className={classes.dialogsItems}>{DialogsElements}</Box>
      <MyChats
        chats={props.state.chats}
        addChat={props.addChat}
        newChatText={props.state.newChatText}
        updateNewChatText={props.updateNewChatText}
      />
    </Container>
  );
};

export default Dialogs;
