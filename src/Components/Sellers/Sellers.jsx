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

const Sellers = ({ endPt, title, marg, smarg }) => {
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
        console.log(data);
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
      <Box h="432" mt={smarg} px={["40px", "60px", "70px", "80px"]}>
        <Flex justifyContent="space-between">
          <Skeleton height="20px" w="500px" mt={2} />
          <Flex>
            <SkeletonCircle size="10" />
            <SkeletonCircle size="10" />
          </Flex>
        </Flex>
        <Flex mt={5}>
          <Box>
            <Skeleton h="240px" w="180px" borderRadius="15" mr={3} />
            <SkeletonText h="240px" w="180px" mt="4" noOfLines={3} />
          </Box>
          <Box>
            <Skeleton h="240px" w="180px" borderRadius="15" mr={3} />
            <SkeletonText h="240px" w="180px" mt="4" noOfLines={3} />
          </Box>
          <Box>
            <Skeleton h="240px" w="180px" borderRadius="15" mr={3} />
            <SkeletonText h="240px" w="180px" mt="4" noOfLines={3} />
          </Box>
          <Box>
            <Skeleton h="240px" w="180px" borderRadius="15" mr={3} />
            <SkeletonText h="240px" w="180px" mt="4" noOfLines={3} />
          </Box>
          <Box>
            <Skeleton h="240px" w="180px" borderRadius="15" mr={3} />
            <SkeletonText h="240px" w="180px" mt="4" noOfLines={3} />
          </Box>
          <Box>
            <Skeleton h="240px" w="180px" borderRadius="15" mr={3} />
            <SkeletonText h="240px" w="180px" mt="4" noOfLines={3} />
          </Box>
        </Flex>
      </Box>
    );
  }

  return (
    <Box h="432" mt={marg} px={["40px", "60px", "70px", "80px"]}>
      <Flex justifyContent="space-between">
        <Text
          fontSize={["15px", "20px", "22px", "22px"]}
          fontWeight="600
      "
        >
          {title}
        </Text>

        <Flex justifyContent="space-between" w="150px">
          <Text
            mr={4}
            fontSize={["12px", "14px", "14px", "14px"]}
            fontWeight="600"
            as="u"
            mt={1}
            ml={[2, 0, 0, 0]}
          >
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
      <Flex mt={3} flexDirection="row">
        <Swiper
          spaceBetween={10}
          breakpoints={{
            375: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            425: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
            1440: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
          }}
        >
          {post.map(({ img, img2, location, people, price, rating, title }) => (
            <SwiperSlide>
              <Card
                img={img}
                img2={img2}
                location={location}
                people={people}
                price={price}
                rating={rating}
                title={title}
              ></Card>
            </SwiperSlide>
          ))}
          <SwiperSlide>
            <Box w="180px" h="343px" cursor="pointer">
              <Box position="relative">
                <Box
                  h="240px"
                  w="178px"
                  mr={10}
                  border="1px"
                  borderColor="gray.400"
                  _hover={{ borderColor: "gray.900" }}
                  borderRadius="15"
                >
                  <Flex mt="195px" px={4} justifyContent="space-between">
                    <Text
                      fontSize="14px"
                      fontWeight="600
                    "
                    >
                      Show All
                    </Text>
                    <ChevronRightIcon w="22px" h="22px"></ChevronRightIcon>
                  </Flex>
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Flex>
    </Box>
  );
};

export default Sellers;
