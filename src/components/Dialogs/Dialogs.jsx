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
  let dialogsData = [
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

  let messagesData = [
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

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        {/* <DialogItem name="Valentina" id="3" />
        <DialogItem name="Elena" id="4" />
        <DialogItem name="Denis" id="5" />
        <DialogItem name="Nikolai" id="6" /> */}
      </div>
      <div className={classes.messages}>
        <Message message={messagesData[0].message} id={messagesData[0].id} />
        <Message message={messagesData[1].message} id={messagesData[1].id} />
        {/* <Message message="Yo" />
        <Message message="Yo" />
        <Message message="Yo" /> */}
      </div>
    </div>
  );
};

export default Dialogs;
