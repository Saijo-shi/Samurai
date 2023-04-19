import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ColorModeScript } from '@chakra-ui/react'
import { addPost, updateNewPostText } from "./components/Redux/State";
import theme from './theme'
export let rerenderEntireTree = (state) => {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <React.StrictMode>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
      </React.StrictMode>
    );
  }
  
 