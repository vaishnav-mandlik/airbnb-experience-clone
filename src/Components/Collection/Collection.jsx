import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import Card from "./Card";
import "swiper/css";

const Collections = () => {
  const ref = useRef(null);

  const onClickLeftHandler = () => {
    let width = ref.current.clientWidth;
    ref.current.scrollLeft = ref.current.scrollLeft - width;
    setDisabled(false);
  };
  const onClickRightHandler = () => {
    let width = ref.current.clientWidth;
    ref.current.scrollLeft = ref.current.scrollLeft + width;
    setDisabled(true);
  };
  const [disabled, setDisabled] = useState(false);

  return (
    <>
      <Box px="" mt={5}>
        <Flex
          flexDirection="row"
          justifyContent="space-between"
          px={["40px", "60px", "70px", "80px"]}
        >
          <Text
            fontSize={["23px", "32px", "32px", "32px"]}
            fontWeight="800"
            mt={["8px", "0px", "0px", "0px"]}
            fontFamily="Helvetica Neue"
          >
            New this week
          </Text>
          <Flex w="85px" justifyContent="space-between" mt={[2, 1, 1, 1]}>
            <Button
              w={["10px", "20px", "20px", "20px"]}
              h={["35px", "40px", "40px", "40px"]}
              pl={3}
              pb={1}
              borderRadius="full"
              border="1px"
              borderColor="#E7E7E7"
              backgroundColor="white"
              cursor="pointer"
              onClick={onClickLeftHandler}
              _hover={{ backgroundColor: "white" }}
              disabled={disabled === false}
            >
              <ChevronLeftIcon mt={1} ml={1} h={6} w={6} />
            </Button>
            <Button
              w={["10px", "20px", "20px", "20px"]}
              h={["35px", "40px", "40px", "40px"]}
              pr={5}
              pb={1}
              borderRadius="full"
              border="1px"
              borderColor="#E7E7E7"
              backgroundColor="white"
              cursor="pointer"
              onClick={onClickRightHandler}
              _hover={{ backgroundColor: "white" }}
              disabled={disabled === true}
            >
              <ChevronRightIcon mt={1} ml={1} h={6} w={6} />
            </Button>
          </Flex>
        </Flex>
      </Box>
      <Box
        mt={6}
        ref={ref}
        position="relative"
        overflow="hidden"
        scrollBehavior="smooth"
      >
        <Flex ml={[3, 12, 12, 12]}>
          <Card
            img="https://a0.muscache.com/im/pictures/e35bb307-05f4-48a4-bdc5-3b2198bb9451.jpg?im_w=720"
            title="Most popular around the world"
          ></Card>

          <Card
            img="https://a0.muscache.com/im/pictures/58819d01-2a71-441d-b3bc-baae0cd64da1.jpg?im_w=720"
            title="Great for team building"
          ></Card>
          <Card
            img="https://a0.muscache.com/im/pictures/bcbd20bb-1654-4ea2-a86c-2cf25666f3b6.jpg?im_w=720"
            title="Fun for the family"
            marg="55px"
          ></Card>
        </Flex>
      </Box>
    </>
  );
};

export default Collections;
