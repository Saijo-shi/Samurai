import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./../Friends.module.css";

const FriendItem = (props) => {
  let path = "/friends/" + props.id;
  return (
    <div className={classes.dialog}>
      <NavLink
        to={path}
        className={(navData) =>
          navData.isActive ? classes.active : classes.friends
        }
      >
        {props.name}
      </NavLink>
    </div>
  );
};

export default FriendItem;