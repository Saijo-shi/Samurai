import React from "react";
import MyPosts from "./MyPosts/MyPosts";

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { Container } from "@chakra-ui/react";

const Profile = (props) => {
  return (
    
      <Container maxW='2xl' centerContent>
        <ProfileInfo />
        <MyPosts
          posts={props.profilePage.posts}
          addPost={props.addPost}
          newPostText={props.profilePage.newPostText}
          updateNewPostText={props.updateNewPostText}
        />
      </Container>

  );
};

export default Profile;
