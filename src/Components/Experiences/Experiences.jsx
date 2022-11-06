import Collections from "../Collection/Collection";
import MoreSectionButton from "../MoreSection/MoreSectionButton";
import Navbar from "../Navbar";
import Sellers from "../Sellers/Sellers";
import StartingSection from "../StartingSection/StartingSection";
import Tags from "../Tags/Tags";

const Experiences = () => {
  return (
    <>
      <Navbar></Navbar>
      <Collections></Collections>
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
      <MoreSectionButton></MoreSectionButton>
    </>
  );
};

export default Experiences;
