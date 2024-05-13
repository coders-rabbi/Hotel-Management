import NavBar from "../sharedComponents/navBar/NavBar";
import Accomodation from "./Accomodation";
import HeroSection from "./HeroSection";
// import TopHeader from "./TopHeader";

const Home = () => {
  return (
    <>
      {/* <TopHeader/> */}
      <NavBar />
      <HeroSection />
      <Accomodation />
    </>
  );
};

export default Home;
