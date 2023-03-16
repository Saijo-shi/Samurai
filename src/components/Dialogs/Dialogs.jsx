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
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogItem name="Vasilii" id="1" />
        <DialogItem name="Liudmila" id="2" />
        <DialogItem name="Valentina" id="3" />
        <DialogItem name="Elena" id="4" />
        <DialogItem name="Denis" id="5" />
        <DialogItem name="Nikolai" id="6" />
      </div>
      <div className={classes.messages}>
        <Message message="Hi" />
        <Message message="How is your IT-Kamasutra" />
        <Message message="Yo" />
        <Message message="Yo" />
        <Message message="Yo" />
      </div>
    </div>
  );
};

export default Dialogs;
