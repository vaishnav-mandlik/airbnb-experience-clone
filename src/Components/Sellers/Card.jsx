import { StarIcon } from "@chakra-ui/icons";
import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const Card = ({ img, img2, location, people, price, rating, title }) => {
  const [curretImg, setCurrentImg] = useState(img);
  return (
    <Box
      w={["165px", "180px", "180px", "180px"]}
      h="343px"
      borderRadius="15"
      cursor="pointer"
      mr={[1, 3, 3, 3]}
    >
      <Box position="relative">
        <Image
          h="240px"
          w={["165px", "180px", "180px", "180px"]}
          src={curretImg}
          borderRadius="15"
          _hover={{
            transform: "scale(1.02)",
            transition: "all 0.5s ease-in-out",
          }}
          onMouseOver={() => setCurrentImg(img2)}
          onMouseOut={() => setCurrentImg(img)}
        ></Image>

        <Image
          position="absolute"
          top={["5px"]}
          left={["130px", "150px", "150px", "150px"]}
          src="https://img.icons8.com/material-outlined/25/FFFFFF/loading-heart.png"
        />
      </Box>
      <Box mt={2}>
        <Flex w="full">
          <StarIcon
            h={["10px", "12px", "12px", "12px"]}
            w={["10px", "12px", "12px", "12px"]}
            mt="3px"
          ></StarIcon>
          <Text fontSize={["11px", "13px", "13px", "13px"]} ml={1}>
            {rating}
          </Text>
          <Text
            fontSize={["11px", "13px", "13px", "13px"]}
            ml="1px"
            color="#717171"
          >
            ({people}) .
          </Text>
          <Text
            fontSize={["11px", "13px", "13px", "13px"]}
            ml="2px"
            color="#717171"
          >
            {location}
          </Text>
        </Flex>
        <Text mt={1} fontSize={["12px", "14px", "14px", "14px"]}>
          {title}
        </Text>
        <Flex>
          <Text fontSize={["12px", "14px", "14px", "14px"]} fontWeight="700">
            From ₹{price}
          </Text>
          <Text fontSize={["12px", "14px", "14px", "14px"]}>/Person</Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default Card;
