import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
const filter = ["Dates", "Group", "More"];

const tags = [
  "groups",
  "Family",
  "Animals",
  "Arts ",
  "Banking",
  "Cooking",
  "Dance",
  "Drinks",
  "Entertainment",
  "Fitness",
  "History ",
  "Magic",
  "Music",
  "Social",
  "Wellness",
  "Olampians",
  "accessibility",
];

const Tags = () => {
  const ref = useRef(null);

  const onClickLeftHandler = () => {
    let width = ref.current.clientWidth;
    ref.current.scrollLeft = ref.current.scrollLeft - width;
  };
  const onClickRightHandler = () => {
    let width = ref.current.clientWidth;
    ref.current.scrollLeft = ref.current.scrollLeft + width;
  };

  return (
    <Flex
      h={["40px", "48px", "48px", "48px"]}
      mt={4}
      px={["40px", "60px", "70px", "80px"]}
    >
      <Flex
        mt={2}
        pt={1}
        pr={[1, 2, 3, 3]}
        borderRight="1px"
        borderColor="#DDDDDD"
      >
        {filter.map((items) => (
          <Text
            w="auto"
            h={["27px", "29px", "31px", "31px"]}
            border="1px"
            borderColor="#DDDDDD"
            py={["2px", "4px", "4px", "4px"]}
            px={["6px", "12px", "12px", "12px"]}
            borderRadius="30"
            fontSize={["12px", "12px", "14px", "14px"]}
            mr={[1, 2, 2, 2]}
            cursor="pointer"
            _hover={{ borderColor: "black" }}
          >
            {items}
          </Text>
        ))}
      </Flex>
      <Box
        w={["24px", "30px", "30px", "30px"]}
        h={["24px", "30px", "30px", "30px"]}
        mt={3}
        ml={3}
        borderRadius="100"
        border="1px"
        borderColor="#E7E7E7"
        cursor="pointer"
        onClick={onClickLeftHandler}
      >
        <ChevronLeftIcon
          ml={["-1px", "1px", "1px", "1px"]}
          mb={["5px", "", "", ""]}
          h={[4, 6, 6, 6]}
          w={[6, 6, 6, 6]}
        />
      </Box>
      <Flex
        mt={2}
        pt={1}
        ref={ref}
        position="relative"
        overflow="hidden"
        scrollBehavior="smooth"
      >
        {tags.map((items) => (
          <Text
            position="relative"
            w="auto"
            h={["27px", "29px", "31px", "31px"]}
            backgroundColor="#F1F1F1"
            py="4px"
            px="12px"
            borderRadius="30"
            fontSize={["12px", "12px", "14px", "14px"]}
            mr={2}
            cursor="pointer"
          >
            {items}
          </Text>
        ))}
      </Flex>
      <Box
        w={["24px", "30px", "30px", "30px"]}
        h={["24px", "30px", "30px", "30px"]}
        mt={3}
        borderRadius="100"
        border="1px"
        borderColor="#E7E7E7"
        cursor="pointer"
        onClick={onClickRightHandler}
      >
        <ChevronRightIcon
          mt={["-4px", 1, 1, 1]}
          ml={["", "1px", "1px", "1px"]}
          h={[4, 6, 6, 6]}
          w={[6, 6, 6, 6]}
        />
      </Box>
    </Flex>
  );
};

export default Tags;
