import React from "react";
import { Text, Image, Box } from "@chakra-ui/react";

const ProfileInfo = () => {
  return (
    <Box>
      <Box boxSize="m">
        <Image
          src="https://global-uploads.webflow.com/618fa90c201104b94458e1fb/62f25059bc47b274d9fe73c3_Top-10-best-VSCode-extensions-for-React-js_MAin-Image.jpg"
          alt="main_image"
        />
      </Box>
      <Box>
        <Text>ava+description</Text>
      </Box>
    </Box>
  );
};

export default ProfileInfo;
