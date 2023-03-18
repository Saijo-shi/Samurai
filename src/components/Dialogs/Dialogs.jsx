import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={classes.dialog}>
      <NavLink
        to={path}
        className={(navData) =>
          navData.isActive ? classes.active : classes.dialog
        }
      >
        {props.name}
      </NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={classes.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  let dialogs = [
    {
      id: 1,
      name: "Vasilii",
    },
    {
      id: 2,
      name: "Liudmila",
    },
    {
      id: 3,
      name: "Valentina",
    },
    {
      id: 4,
      name: "Elena",
    },
    {
      id: 5,
      name: "Denis",
    },
    {
      id: 6,
      name: "Nikolai",
    },
  ];

  let messages = [
    {
      id: 1,
      message: "Hi",
    },
    {
      id: 2,
      message: "How is your IT-Kamasutra?",
    },
    {
      id: 3,
      message: "Yo",
    },
    {
      id: 4,
      message: "Yo",
    },
    {
      id: 5,
      message: "Yo",
    },
  ];

  let DialogsElements = dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = messages.map((message) => (
    <Message message={message.message} id={messages.id} />
  ));

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{DialogsElements}</div>
      <div className={classes.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
