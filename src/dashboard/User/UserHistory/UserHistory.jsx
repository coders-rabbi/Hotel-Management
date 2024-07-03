import React, { useEffect, useState } from "react";
import demoImg from "../../../assets/Rooms/room-5.jpg";

const UserHistory = () => {
  const [roomsData, setRoomsData] = useState([]);

  useEffect(() => {
    fetch("../../../../public/data.json")
      .then((res) => res.json())
      .then((data) => setRoomsData(data));
  }, []);

  console.log(roomsData);

  return (
    <div>
      <h2 className="text-4xl font-semibold mt-4">Your rented Room</h2>

      {roomsData.map((room, index) => (
        <table className="table">
          <thead>
            <td>Room Image</td>
            <td>Hotel Name</td>
            <td>Room Capacity</td>
            <td>Rooms</td>
            <td>Check-in-date</td>
            <td>Check-out-date</td>
            <td>Total</td>
          </thead>
          <tbody>
            <tr>
              <td>
                <img className="w-24 h-16" src={demoImg} alt="" />
              </td>
              <td>Hotel Relax</td>
              <td>1 tiwn Bed</td>
              <td>2</td>
              <td>22-02-2022</td>
              <td>22-02-2022</td>
              <td>175 $</td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
};

export default UserHistory;
