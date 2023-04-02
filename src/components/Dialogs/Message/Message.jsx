import React from "react";

import classes from "./../Dialogs.module.css";

const Message = (props) => {
  return <div className={classes.message}><img src="https://dumbosdiary.com/wp-content/uploads/2017/04/digital-painting-profile-pic.jpg" alt='avatar'></img>{props.message}</div>;
};

export default Message;
