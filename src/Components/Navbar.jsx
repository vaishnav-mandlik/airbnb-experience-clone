import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <Flex
      w="100%"
      h="80px"
      py="20px"
      px="80px"
      borderBottom="1px"
      borderColor="#ECECEC"
      justifyContent="space-between"
      flexDirection="row"
    >
      <Image
        w="102px"
        h="32px"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
        cursor="pointer"
      ></Image>
      <Flex>
        <Box
          w="127px"
          h="41px"
          borderRadius="100"
          _hover={{ backgroundColor: "#f7f7f7" }}
          cursor="pointer"
        >
          <Text pt="10px" fontSize="14px" px={2} fontWeight="600">
            Beacome a host
          </Text>
        </Box>
        <Box
          w="40px"
          h="40px"
          borderRadius="100"
          _hover={{ backgroundColor: "#f7f7f7" }}
          pt={3}
          pl={3}
          cursor="pointer"
        >
          <Image
            h="18px"
            w="18px"
            src="https://img.icons8.com/ios-glyphs/60/null/globe-earth--v1.png"
          ></Image>
        </Box>
        <Flex
          ml={2}
          h="41px"
          w="76px"
          border="1px"
          borderRadius="30"
          cursor="pointer"
          borderColor="#EEEEEE"
          pl={3}
          pr={3}
          justifyContent="space-between"
          _hover={{
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
          }}
        >
          <Image
            mt={3}
            w="16px"
            h="16px"
            src="https://img.icons8.com/ios-glyphs/60/717171/menu-rounded.png"
          ></Image>
          <Image
            mt={2}
            w="25px"
            h="25px"
            src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/717171/external-user-user-tanah-basah-glyph-tanah-basah-4.png"
          ></Image>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
