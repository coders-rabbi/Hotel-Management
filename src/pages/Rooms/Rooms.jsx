import React, { useEffect, useState } from "react";
import demoImg from "../../assets/Rooms/room-4.jpg";
import {
  FaBed,
  FaBox,
  FaEye,
  FaHandHoldingHeart,
  FaStar,
  FaUser,
} from "react-icons/fa";
import useRoomsData from "../../hooks/useRoomsData";

const Rooms = () => {
  // const [roomsData, refetch] = useRoomsData();
  const [roomsData, setRoomsData] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setRoomsData(data));
  }, []);

  console.log(roomsData.image);

  return (
    <div>
      <div className="aboutPage-banner flex justify-center items-center">
        <div>
          <h1 className="uppercase text-6xl text-white text-center mb-5">
            Rooms-List Views
          </h1>
          <p className="text-white text-xl text-center">
            Extremely enticing fusion of cozy rooms and fabulous view from the
            window <br /> will surprise you as soon as you open the door of your
            room. Enjoy the calmness <br /> and majesty of this place
          </p>
        </div>
      </div>

      {/* Rooms list and Detail Section */}

      {roomsData.map((room, index) => (
        <div className="max-w-screen-2xl m-auto grid grid-cols-12 gap-10 p-8 mt-14 shadow-md">
          <div className="col-span-4">
            <img className="" src={room.image} alt="" />
          </div>

          <div className="col-span-6">
            <h3 className="text-2xl font-semibold mb-5">
              Standard Single Room
            </h3>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2 text-2xl">
                <FaStar></FaStar>{room.rating}
              </div>
              <div className="flex items-center gap-2 text-2xl">
                <FaUser></FaUser>{room.room_capacity}
              </div>
              <div className="flex items-center gap-2 text-2xl">
                <FaBox></FaBox>{room.room_space}
              </div>
            </div>
            <hr />
            <p className="mt-8">
            {room.description}
            </p>
            <div className="flex items-center justify-between mt-8">
              <div>
                <p className="flex items-center gap-2 text-2xl mb-4">
                  <FaEye></FaEye> {room.room_view}
                </p>
                <p className="flex items-center gap-2 text-2xl">
                  <FaBed></FaBed> {room.bed_size}
                </p>
              </div>
              <div className="flex gap-2">
                <FaHandHoldingHeart className="text-2xl"></FaHandHoldingHeart>
                <p className="max-w-40">
                {room.room_facility}
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <p className="font-semibold mb-4">Prices start at:</p>
            <h3 className="text-3xl mb-6">
              ${room.price}/ <span className="text-xl">per night</span>
            </h3>
            <div className="flex flex-col-reverse gap-5">
              <button className="bg-gray-200 hover:bg-gray-300 text-black text-xl font-semibold py-2">
                View Details
              </button>
              <button className="bg-[#BF9B79] hover:bg-[#d5b08d] text-white text-xl font-semibold py-2">
                Book
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rooms;
