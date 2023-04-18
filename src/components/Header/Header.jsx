import React from "react";
import classes from './Header.module.css'
import { Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <header className={classes.header}>
      
      <img
        src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?w=1060&t=st=1677330402~exp=1677331002~hmac=a2db3f2eeced3405fed542ffe8fcd77d152470c3863efa1a4aa2ce6550a95815"
        alt="logo"
      ></img>
     <Heading>SOCIAL NETWORK PLUS</Heading>
        
      
    </header>
  );
};

export default Header;
