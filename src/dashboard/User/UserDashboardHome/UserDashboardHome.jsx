import React, { useEffect, useState } from "react";
import demoImg from "../../../assets/Rooms/room-5.jpg";

const UserDashboardHome = () => {
  const [roomsData, setRoomsData] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setRoomsData(data));
  }, []);

  console.log(roomsData);

  return (
    <div className="mt-4">
      <h2 className="text-4xl font-semibold">Your rented Room</h2>

      {
        roomsData.map((room, index) => (
          <div className="border mt-10 flex justify-center items-center gap-8 py-5">
        <div>
          <img className="w-72" src={room.image} alt="" />
        </div>

        <div>
          <h3 className="text-3xl font-semibold mb-3">Standard Single Room</h3>
          <h4 className="text-xl font-semibold">2 Days & 1 Night</h4>
          <p className="text-xl font-semibold mt-3">Bill: 120$</p>
          <div className="flex items-center gap-8 mt-3">
            <p className="text-xl font-semibold">From: 22 May</p>
            <p className="text-xl font-semibold">To: 24 May</p>
          </div>
          <div className="sm:flex items-center gap-5 mt-5">
            <div className="flex justify-center mb-5 sm:mb-0 ">
              <button className="text-2xl font-semibold bg-[#BF9B79] px-6 py-2 rounded-md">
                Cancel
              </button>
            </div>
            <div className="flex justify-center">
              <button className="text-2xl font-semibold bg-[#BF9B79] px-6 py-2 rounded-md">
                Due
              </button>
            </div>
          </div>
        </div>
      </div>
        ))
      }

      
    </div>
  );
};

export default UserDashboardHome;
