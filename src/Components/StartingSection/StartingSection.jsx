import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "./Card";

const StartingSection = ({ endPt }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [post, setPost] = useState([]);
  const [cardsNo, setCardsNo] = useState(0);
  const fetchPost = async () => {
    const response = await fetch(
      `https://airbnb-experiences-clone.herokuapp.com/${endPt}`
    );
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    setIsLoaded(true);

    fetchPost()
      .then((data) => {
        setPost(data);
        console.log(data, "next");
        setCardsNo(data.length);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoaded(false);
      });
  }, []);

  if (isLoaded) {
    return (
      <Box h="432" px="80px">
        <Flex justifyContent="space-between">
          <Skeleton height="20px" w="300px" mt={2} />
          <Flex>
            <SkeletonCircle size="10" />
            <SkeletonCircle size="10" />
          </Flex>
        </Flex>
        <Flex mt={5}>
          <Box>
            <Skeleton w="365px" h="169px" borderRadius="15" mr={3} />
          </Box>
          <Box>
            <Skeleton w="365px" h="169px" borderRadius="15" mr={3} />
          </Box>
          <Box>
            <Skeleton w="365px" h="169px" borderRadius="15" mr={3} />
          </Box>
        </Flex>
      </Box>
    );
  }
  return (
    <Box h="258px" px="80px">
      <Flex justifyContent="space-between">
        <Text
          fontSize="22px"
          fontWeight="600
      "
        >
          Starting in the next 6 hours
        </Text>

        <Flex justifyContent="space-between" w="150px">
          <Text mr={4} fontSize="14px" fontWeight="600" as="u" mt={1}>
            Show({cardsNo})
          </Text>
          <Box
            w="30px"
            h="30px"
            borderRadius="100"
            border="1px"
            borderColor="#E7E7E7"
            cursor="pointer"
          >
            <ChevronLeftIcon ml="1px" h={6} w={6} />
          </Box>
          <Box
            w="30px"
            h="30px"
            borderRadius="100"
            border="1px"
            borderColor="#E7E7E7"
            cursor="pointer"
          >
            <ChevronRightIcon mt={1} ml="1px" h={6} w={6} />
          </Box>
        </Flex>
      </Flex>
      <Flex>
        <Swiper slidesPerView={3} spaceBetween={10}>
          {post.map(
            ({ img, img2, location, people, price, rating, title, time }) => (
              <SwiperSlide>
                <Card
                  img={img}
                  img2={img2}
                  location={location}
                  people={people}
                  price={price}
                  rating={rating}
                  title={title}
                  time={time}
                ></Card>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </Flex>
    </Box>
  );
};

export default StartingSection;
