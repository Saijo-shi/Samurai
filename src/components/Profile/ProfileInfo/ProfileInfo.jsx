import React from "react";
import { Text, Image, Box } from "@chakra-ui/react";

const ProfileInfo = () => {
  return (
    <Box>
      <Box>
        <Box boxSize="m">
          <Image
            src="https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/templates/social/reactt-dark_1200x628.png?sfvrsn=19de8226_2"
            alt="main_image"
          />
        </Box>
        <Box>
          <Text>ava+description</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileInfo;
