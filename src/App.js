import { Box, Button } from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import Collection from "./Components/Collection/Collection";
import MoreSection from "./Components/MoreSection/MoreSection";
import Navbar from "./Components/Navbar";
import Sellers from "./Components/Sellers/Sellers";
import StartingSection from "./Components/StartingSection/StartingSection";
import Tags from "./Components/Tags/Tags";

function App() {
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      <Navbar></Navbar>
      <Collection></Collection>
      <Tags></Tags>
      <Sellers
        endPt="sec2"
        title="Plan a trip with help from local Hosts around the world"
        marg={8}
        smarg={8}
      ></Sellers>
      <Sellers endPt="topsec" title="Top sellers"></Sellers>
      <StartingSection endPt="next-6-hours"></StartingSection>

      <Sellers
        endPt="groups"
        title="Great for groups"
        marg={5}
        smarg={-40}
      ></Sellers>
      <Sellers endPt="weeked-plan" title="Make plans this weekend"></Sellers>
      <Box justifyContent="center">
        {showMore && <MoreSection></MoreSection>}
        <Button
          backgroundColor="black"
          ml="550px"
          color="white"
          fontSize="14px"
          fontWeight="600"
          _hover={{ backgroundColor: "black" }}
          onClick={() => {
            setShowMore(true);
          }}
          hidden={showMore}
        >
          Load More
        </Button>
      </Box>
    </>
  );
}

export default App;
