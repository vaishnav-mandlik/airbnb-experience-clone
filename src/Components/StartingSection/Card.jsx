import { StarIcon } from "@chakra-ui/icons";
import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const Card = ({ img, img2, location, people, price, rating, title, time }) => {
  const [curretImg, setCurrentImg] = useState(img);
  // const time = ["1:00 am", "2:00 pm"];
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setCurrentImg(img2);
    setHover(true);
  };

  return (
    <Flex
      w="365px"
      h="169px"
      mt={4}
      borderRadius="15"
      cursor="pointer"
      border="1px"
      p={2}
      borderColor="#DFDFDF"
      mr={3}
    >
      <Box>
        <Image
          h="150px"
          w="110px"
          src={curretImg}
          borderRadius="15"
          _hover={{
            transform: "scale(1.02)",
            transition: "all 0.5s ease-in-out",
          }}
          onMouseOver={() => setCurrentImg(img2)}
          onMouseOut={() => setCurrentImg(img)}
        ></Image>
      </Box>

      <Box>
        <Box>
          <Image
            ml="220px"
            src="https://img.icons8.com/ios/20/000000/loading-heart.png"
          />
        </Box>
        <Box mt={1} ml={4} w="200px">
          <Flex w="full">
            <StarIcon h="12px" w="12px" mt="3px"></StarIcon>
            <Text fontSize="13px" ml={1}>
              {rating}
            </Text>
            <Text fontSize="13px" ml="1px" color="#717171">
              ({people}) .
            </Text>
            <Text fontSize="13px" ml="2px" color="#717171">
              {location}
            </Text>
          </Flex>
          <Text mt={1} fontSize="14px">
            {title}
          </Text>
          <Flex>
            <Text fontSize="14px" fontWeight="700">
              From ₹{price}
            </Text>
            <Text fontSize="14px">/Person</Text>
          </Flex>
        </Box>
        <Flex h="40px">
          {time.map((time) => (
            <Box
              px={3}
              py={1}
              h="31px"
              w="auto"
              border="1px"
              textAlign="center"
              borderRadius="10"
              ml={2}
              mt={2}
            >
              <Text fontSize="12px" fontWeight="600">
                {time}
              </Text>
            </Box>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
};

export default Card;
