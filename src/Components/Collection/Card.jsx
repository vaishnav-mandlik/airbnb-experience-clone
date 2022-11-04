import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";

const Card = ({ marg, img, title }) => {
  return (
    <Box>
      <Box
        w="530px"
        h="302px"
        borderRadius="15"
        position="relative"
        textAlign="center"
        ml={5}
        mr={marg}
      >
        <Image w="530px" h="302px" borderRadius="15" src={img}></Image>
        <Text
          fontSize="12px"
          position="absolute"
          top="18px"
          left="25px"
          color="white"
        >
          Collection
        </Text>

        <Text
          position="absolute"
          fontSize="22px"
          fontWeight="500"
          fontFamily="Helvetica Neue"
          color="white"
          top="35px"
          left="25px"
        >
          {title}
        </Text>

        <Box>
          <Button
            position="absolute"
            backgroundColor="white"
            borderRadius="8"
            top="250px"
            left="25px"
            w="85px"
            h="32px"
          >
            <Text fontSize="12px">Show all </Text>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
