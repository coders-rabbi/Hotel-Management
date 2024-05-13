import NavBar from "../sharedComponents/navBar/NavBar";
import Accomodation from "./Accomodation";
import DisplayRoom from "./DisplayRoom";
import HeroSection from "./HeroSection";
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
    </>
  );
};

export default Home;
