import room1 from "../../assets/Rooms/room-4.jpg";
import room2 from "../../assets/Rooms/room-5.jpg";
import room3 from "../../assets/Rooms/room-7.jpg";
import room4 from "../../assets/Rooms/room-8.jpg";
import room5 from "../../assets/Rooms/bg-1.jpg";
import room6 from "../../assets/Rooms/bg-2.jpg";
import { MdOutlineStar } from "react-icons/md";

import "./DisplayRoom.css";

const DisplayRoom = () => {
  return (
    <div className="grid grid-cols-4 mt-28">
      <div className="img-04 h-[450px] flex items-center justify-center">
        {/* background image from css */}
      </div>
      <div className="bg-01 h-[450px] flex items-center justify-center">
        <div>
          <div className="flex items-center justify-center gap-5">
            <div className="bg-white w-14 h-1"></div>
            <p className="text-white">QUEEN ROOM</p>
            <div className="bg-white w-14 h-1"></div>
          </div>
          <p className="text-white text-2xl font-semibold text-center mt-5">
            Suite with 2 Bedrooms,
            <br />
            Bathtub & Spa
          </p>
          <p className="text-white text-center mt-4">
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit
            phasellus.
          </p>
          <div className="flex items-center justify-center mt-10">
            <button className="border px-6 py-2 text-white text-2xl font-semibold">
              $45,20
            </button>
          </div>
        </div>
      </div>
      <div className="img-03 h-[450px] flex items-center justify-center">
        {/* image from css file */}
      </div>
      <div className="bg-01 h-[450px] flex items-center justify-center">
        <div>
          <div className="flex items-center justify-center gap-5">
            <div className="bg-white w-14 h-1"></div>
            <p className="text-white">KING ROOM</p>
            <div className="bg-white w-14 h-1"></div>
          </div>
          <p className="text-white text-2xl font-semibold text-center mt-5">
            Luxurious Apartment <br /> With Room Service
          </p>
          <p className="text-white text-center mt-4">
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit
            phasellus.
          </p>
          <div className="flex items-center justify-center mt-10">
            <button className="border px-6 py-2 text-white text-2xl font-semibold">
              $45,20
            </button>
          </div>
        </div>
      </div>
      <div className="bg-01 h-[450px] flex items-center justify-center">
        <div>
          <div className="flex items-center justify-center gap-5">
            <div className="bg-white w-14 h-1"></div>
            <p className="text-white">KING ROOM</p>
            <div className="bg-white w-14 h-1"></div>
          </div>
          <p className="text-white text-2xl font-semibold text-center mt-5">
            Room with City View <br /> & Private Bathroom
          </p>
          <p className="text-white text-center mt-4">
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit
            phasellus.
          </p>
          <div className="flex items-center justify-center mt-10">
            <button className="border px-6 py-2 text-white text-2xl font-semibold">
              $45,20
            </button>
          </div>
        </div>
      </div>
      <div className="img-02 h-[450px] flex items-center justify-center">
        {/* image from css file */}
      </div>
      <div className="bg-02 h-[450px] flex items-center justify-center">
        <div>
          <div className="flex items-center justify-center gap-5">
            <div className="bg-white w-14 h-1"></div>
            <p className="text-white">SMALL SUITE</p>
            <div className="bg-white w-14 h-1"></div>
          </div>
          <p className="text-white text-2xl font-semibold text-center mt-5">
            Summer Promotion With <br /> Access to t he Pool
          </p>
          <p className="text-white text-center mt-4">
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit
            phasellus.
          </p>
          <div className="flex items-center justify-center mt-10">
            <button className="border px-6 py-2 text-white text-2xl font-semibold">
              $45,20
            </button>
          </div>
        </div>
      </div>
      <div className="img-01 h-[450px] flex items-center justify-center">
        {/* image from css file */}
      </div>
    </div>
  );
};

export default DisplayRoom;
