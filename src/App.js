import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Navbar/Friends/Friends";
import { ChakraProvider } from "@chakra-ui/react";
const App = (props) => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <div className="appWrapper">
          <Header />
          <Navbar />
          <div className="app_wrapper_content">
            <Routes>
              <Route
                path="/profile/*"
                element={
                  <Profile
                    profilePage={props.state.profilePage}
                    dispatch={props.dispatch}
                    
                  />
                }
              />
              <Route
                path="/dialogs/*"
                element={
                  <Dialogs
                    dialogsPage={props.state.dialogsPage}
                    addMessage={props.addMessage}
                    updateNewMessageText={props.updateNewMessageText}
                  />
                }
              />
              <Route path="/news" element={<News />} />
              <Route path="/music" element={<Music />} />
              <Route path="/settings" element={<Settings />} />
              <Route
                path="/friends/*"
                element={<Friends state={props.state.sidebar} />}
              />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
