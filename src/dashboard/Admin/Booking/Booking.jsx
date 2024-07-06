import React, { useEffect, useState } from "react";

const Booking = () => {
  const [roomsData, setRoomsData] = useState([]);

  const booking = roomsData.filter(
    (room) => room.status !== "Checked-Out" && room.status !== "Canceled"
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
            <td>Check-in/Out-date</td>
            <td>Amount</td>
            <td>Info</td>
            <td>Status</td>
            <td>Invoice</td>
          </thead>
          <tbody>
            <tr>
              <td>
                <img className="w-24 h-16" src={room.image} alt="" />
              </td>
              <td>{room.room_name}</td>
              <td>
                {room.from} <br />
                {room.to}
              </td>
              <td>{room.price} $</td>
              <td>
                <button className="btn btn-success">Info</button>
              </td>
              <td>
                <button className="btn btn-error">{room.status}</button>
              </td>
              <td>
                <button className="btn btn-primary">Invoice</button>
              </td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
};

export default Booking;
