import React, { useEffect, useState } from "react";

const AdminHistory = () => {
  const [roomsData, setRoomsData] = useState([]);

  const booking = roomsData.filter(
    (room) =>
      room.status !== "Checked-In" &&
      room.status !== "Confirmed" &&
      room.status !== "Pending"
  );

  useEffect(() => {
    fetch("http://localhost:5000/bookings")
      .then((res) => res.json())
      .then((data) => setRoomsData(data));
  }, []);

  console.log(roomsData);

  return (
    <div>
      <h2 className="text-4xl font-semibold mt-4">Your rented Room</h2>

      {booking.map((room, index) => (
        <table className="table">
          <thead>
            <td>Room Image</td>
            <td>Room Type</td>
            <td>Rooms</td>
            <td>Check-in/Out-date</td>
            <td>Total</td>
            <td>Status</td>
          </thead>
          <tbody>
            <tr>
              <td>
                <img className="w-24 h-16" src={room.image} alt="" />
              </td>
              <td>Hotel Relax</td>
              <td>2</td>
              <td>
                22-02-2022 <br />
                22-02-2022
              </td>
              <td>{room.price} $</td>
              <td>{room.status}</td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
};

export default AdminHistory;
