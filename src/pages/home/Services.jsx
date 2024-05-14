import smartKey from "../../assets/services/iocn-14.png";
import baggAge from "../../assets/services/icon-13-1.png";
import kingRoom from "../../assets/services/icon-12-1.png";
import wifi from "../../assets/services/icon-10.png";
import "./Service.css";
import { MdOutlineStar } from "react-icons/md";

const Services = () => {
  return (
    <div className="max-w-screen-xl m-auto mt-20">
      <h5 className="uppercase text-[#BF9B79] text-center">holte Services</h5>
      <h1 className="text-5xl text-black text-center">Facilities & Services</h1>

      <div className="grid grid-cols-4 justify-center items-center mt-24">
        <div className="m-auto">
          <img className="w-24 mb-8" src={smartKey} alt="" />
          <h3 className="uppercase text-xl font-semibold">Smart Key</h3>
        </div>

        <div className="m-auto">
          <img className="w-24 mb-8" src={baggAge} alt="" />
          <h3 className="uppercase text-xl font-semibold">Baggage Hold</h3>
        </div>

        <div className="m-auto">
          <img className="w-24 mb-8" src={kingRoom} alt="" />
          <h3 className="uppercase text-xl font-semibold">King Room</h3>
        </div>

        <div className="m-auto">
          <img className="w-24 mb-8" src={wifi} alt="" />
          <h3 className="uppercase text-xl font-semibold">Wifi Areas</h3>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5 mt-20">
        <div className="grid  grid-rows-2 gap-5">
          <div className="bg-01 flex justify-center items-center">
            <div className="text-center text-white">
              <h1 className="uppercase text-2xl text-white">hotel Address</h1>
              <p className="mt-4 text-xl">Mirpur-14, Dhaka</p>
              <p className="mt-1 text-xl">Ph. 01303329413</p>
              <p className="mt-1 text-xl">info@hotel</p>
            </div>
          </div>
          <div className="bg-02 flex justify-center items-center">
            <div className="text-center text-white">
              <h1 className="uppercase text-2xl">Reception Timing</h1>
              <p className="mt-4 text-xl">MON..... 11:00 - 3:00 pm</p>
              <p className="mt-1 text-xl">FRY..... 11:00 - 3:00 pm</p>
              <p className="mt-1 text-xl">SAT..... 11:00 - 3:00 pm</p>
              <p className="mt-1 text-xl">SUN..... 11:00 - 3:00 pm</p>
            </div>
          </div>
        </div>
        <div className="bg-03 h-[540px] flex items-center justify-center">
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center flex-col-reverse">
              <button className="text-white uppercase text-xl">
                Check prices
              </button>
              <h1 className="uppercase text-6xl text-white mb-8">Rooms</h1>
              <MdOutlineStar className="text-white text-5xl mb-10" />
            </div>
          </div>
        </div>
        <div className="bg-04 h-[540px] flex items-center justify-center">
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center flex-col-reverse">
              <button className="text-white uppercase text-xl">
                Check prices
              </button>
              <h1 className="uppercase text-6xl text-white mb-8">Suites</h1>
              <MdOutlineStar className="text-white text-5xl mb-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
