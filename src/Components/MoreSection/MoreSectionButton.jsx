import { Box, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import MoreSection from "./MoreSection";
const MoreSectionButton = () => {
  const [showMore, setShowMore] = useState(false);

  const [isLoaded, setIsLoaded] = useState(false);
  const [post, setPost] = useState([]);

  const fetchPost = async () => {
    const response = await fetch(
      `https://airbnb-experiences-clone.herokuapp.com/more`
    );
    const data = await response.json();
    return data;
  };

  const onClickHandle = () => {
    setIsLoaded(true);

    fetchPost()
      .then((data) => {
        setPost(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoaded(false);
        setShowMore(true);
      });
  };

  return (
    <Box justifyContent="center">
      <Button
        backgroundColor="black"
        ml={["160px", "250px", "330px", "450px", "600px"]}
        color="white"
        fontSize="14px"
        fontWeight="600"
        _hover={{ backgroundColor: "black" }}
        onClick={onClickHandle}
        isLoading={isLoaded}
        hidden={showMore}
        colorScheme="black"
        spinner={<BeatLoader size={8} color="white" />}
      >
        Load More
      </Button>
      {showMore && (
        <MoreSection title="All Online Experiences" post={post}></MoreSection>
      )}
    </Box>
  );
};

export default MoreSectionButton;
