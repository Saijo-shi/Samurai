import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./../Dialogs.module.css";
import { Box } from "@chakra-ui/react";

const DialogItem = (props) => {
  let path = "/dialogs/*" + props.id;
  return (
    <Box className={classes.dialog}>
      <NavLink
        to={path}
        className={(navData) =>
          navData.isActive ? classes.active : classes.dialog
        }
      >
        {props.name}
      </NavLink>
    </Box>
  );
};

export default DialogItem;
