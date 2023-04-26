import React from "react";
import MyPosts from "./MyPosts/MyPosts";

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { Box, Container } from "@chakra-ui/react";

const Profile = (props) => {
  return (
    <Container maxW='md' color='white'>
      <Box w='900px' >
        <ProfileInfo />
        <MyPosts
          posts={props.profilePage.posts}
          addPost={props.addPost}
          newPostText={props.profilePage.newPostText}
          updateNewPostText={props.updateNewPostText}
        />
      </Box>
    </Container>
  );
};

export default Profile;
