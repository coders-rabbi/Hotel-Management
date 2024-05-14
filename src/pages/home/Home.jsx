import NavBar from "../sharedComponents/navBar/NavBar";
import Accomodation from "./Accomodation";
import DisplayRoom from "./DisplayRoom";
import HeroSection from "./HeroSection";
import MiddleBanner from "./MiddleBanner";
import Services from "./Services";
// import TopHeader from "./TopHeader";

const Home = () => {
  return (
    <>
      {/* <TopHeader/> */}
      <NavBar />
      <HeroSection />
      <Accomodation />
      <DisplayRoom />
      <Services />
      <MiddleBanner/>
    </>
  );
};

export default Home;
