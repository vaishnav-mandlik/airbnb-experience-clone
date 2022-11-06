import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

import Card from "./Card";

const MoreSection = ({ title, marg, post }) => {
  return (
    <Box mt={marg} px={["40px", "60px", "70px", "80px"]}>
      <Flex justifyContent="space-between">
        <Text
          fontSize="22px"
          fontWeight="600
      "
        >
          {title}
        </Text>
      </Flex>
      <SimpleGrid columns={[2, 2, 3, 4, 5]} spacing={[10, 20, 20, 20, 10]}>
        {post.map(({ img, img2, location, people, price, rating, title }) => (
          <Card
            img={img}
            img2={img2}
            location={location}
            people={people}
            price={price}
            rating={rating}
            title={title}
          ></Card>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default MoreSection;
