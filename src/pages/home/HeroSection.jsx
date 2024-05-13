import { MdOutlineStar } from "react-icons/md";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="heroBanner flex justify-center items-center">
      <div>
        <p className="text-5xl text-white font-semibold mb-10 text-center uppercase">
          The Best
        </p>
        <div className="flex items-center gap-10">
          <div className="bg-white w-36 h-1"></div>
          <MdOutlineStar className="text-3xl text-white" />
          <div className="bg-white w-36 h-1"></div>
        </div>
        <h1 className="text-9xl text-white font-bold text-center mt-12">
          HOTEL
        </h1>
        <div className="flex gap-3 items-center justify-center mt-5">
          <p className="text-white">ROOMS</p>
          <p className="text-white">|</p>
          <p className="text-white">SUITS</p>
        </div>
        <div className="flex items-center justify-center gap-10 mt-10">
          <button className="text-2xl text-white bg-[#373737] py-2 px-5">
            Book Now
          </button>
          <button className="text-2xl text-white bg-[#C19B77] py-2 px-5">
            Contact Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
