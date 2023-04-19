import React from "react";
import classes from "./Header.module.css";
import { Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <header className={classes.header}>
      <img
        src="https://image.similarpng.com/very-thumbnail/2020/12/Lorem-ipsum-logo-design-on-transparent-PNG.png"
        alt="logo"
      ></img>
      <Heading>SOCIAL NETWORK PLUS</Heading>
    </header>
  );
};

export default Header;
