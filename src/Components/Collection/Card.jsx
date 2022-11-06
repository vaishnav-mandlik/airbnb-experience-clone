import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";

const Card = ({ marg, img, title }) => {
  return (
    <Box>
      <Box
        w={["280px", "530px", "530px", "530px"]}
        h={["222px", "302px", "302px", "302px"]}
        borderRadius={["10", "15", "15", "15"]}
        position="relative"
        textAlign="center"
        ml={5}
        mr={marg}
      >
        <Image
          w={["280px", "530px", "530px", "530px"]}
          h={["222px", "302px", "302px", "302px"]}
          borderRadius="15"
          src={img}
        ></Image>
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
          fontSize={["16px", "22px", "22px", "22px"]}
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
            top={["170px", "250px", "250px", "250px"]}
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
