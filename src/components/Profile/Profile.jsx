import React from "react";
import MyPosts from "./MyPosts/MyPosts";

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { Box } from "@chakra-ui/react";

const Profile = (props) => {
  return (
    
      <Box w='900px' >
        <ProfileInfo />
        <MyPosts
          posts={props.profilePage.posts}
          addPost={props.addPost}
          newPostText={props.profilePage.newPostText}
          updateNewPostText={props.updateNewPostText}
        />
      </Box>

  );
};

export default Profile;
