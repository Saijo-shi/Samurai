import React from "react";
import MyPosts from "./MyPosts/MyPosts";

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { Container } from "@chakra-ui/react";

const Profile = (props) => {
  return (
    <Container maxW="2xl" centerContent>
      <ProfileInfo />
      <MyPosts
        posts={props.profilePage.posts}
        dispatch={props.dispatch}
        newPostText={props.profilePage.newPostText}
      />
    </Container>
  );
};

export default Profile;
