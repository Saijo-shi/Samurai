import React from "react";

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
    let text = newMessageElement.current.value;
    alert(text);
  };
  return (
    <div>
      <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>{DialogsElements}</div>
        <div className={classes.messages}>{messagesElements}</div>
      </div>
      <div>
        <h3 className={classes.postsHeader}>Create new message</h3>
        <div>
          <div>
            <textarea ref={newMessageElement}></textarea>
          </div>
          <div>
            <button onClick={addMessage}>Add post</button>
          </div>
          <div>
            <button>Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
