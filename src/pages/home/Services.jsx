import smartKey from "../../assets/services/iocn-14.png";
import baggAge from "../../assets/services/icon-13-1.png";
import kingRoom from "../../assets/services/icon-12-1.png";
import wifi from "../../assets/services/icon-10.png";

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
            <img className="w-24 mb-8" src={smartKey} alt="" />
            <h3 className="uppercase text-xl font-semibold">Smart Key</h3>
        </div>

        <div className="m-auto">
            <img className="w-24 mb-8" src={smartKey} alt="" />
            <h3 className="uppercase text-xl font-semibold">Smart Key</h3>
        </div>

        <div className="m-auto">
            <img className="w-24 mb-8" src={smartKey} alt="" />
            <h3 className="uppercase text-xl font-semibold">Smart Key</h3>
        </div>

      </div>
    </div>
  );
};

export default Services;
