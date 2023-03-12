import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <div className={classes.dialog}>
          <NavLink
            to="/dialogs/1"
            className={(navData) =>
              navData.isActive ? classes.active : classes.dialog
            }
          >
            Vasilii
          </NavLink>
        </div>
        <div className={classes.dialog}>
          <NavLink
            to="/dialogs/2"
            className={(navData) =>
              navData.isActive ? classes.active : classes.dialog
            }
          >
            Liudmila
          </NavLink>
        </div>
        <div className={classes.dialog}>
          <NavLink
            to="/dialogs/3"
            className={(navData) =>
              navData.isActive ? classes.active : classes.dialog
            }
          >
            Valentina
          </NavLink>
        </div>
        <div className={classes.dialog}>
          <NavLink
            to="/dialogs/4"
            className={(navData) =>
              navData.isActive ? classes.active : classes.dialog
            }
          >
            Elena
          </NavLink>
        </div>
        <div className={classes.dialog}>
          <NavLink
            to="/dialogs/5"
            className={(navData) =>
              navData.isActive ? classes.active : classes.dialog
            }
          >
            Denis
          </NavLink>
        </div>
        <div className={classes.dialog}>
          <NavLink
            to="/dialogs/6"
            className={(navData) =>
              navData.isActive ? classes.active : classes.dialog
            }
          >
            Nikolai
          </NavLink>
        </div>
      </div>
      <div className={classes.messages}>
        <div className={classes.message}>Hi</div>
        <div className={classes.message}>How is your IT-Kamasutra</div>
        <div className={classes.message}>Yo</div>
      </div>
    </div>
  );
};

export default Dialogs;
