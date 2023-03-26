import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

let posts = [
  {
    id: 1,
    post: "Hi, how are you?",
    likesCount: 12,
  },
  {
    id: 2,
    post: "It's my first post",
    likesCount: 23,
  },
  {
    id: 3,
    post: "Goin outdoors",
    likesCount: 12,
  },
  {
    id: 4,
    post: "Just doin HW",
    likesCount: 23,
  },
];

let dialogs = [
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

let messages = [
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
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
