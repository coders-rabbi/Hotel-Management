import React, { useContext, useEffect, useState } from "react";
import demoImg from "../../../assets/Rooms/room-5.jpg";
import { AuthContext } from "../../../authProvider/AuthProvider";

const UserHistory = () => {
  const [bookings, setBookingsData] = useState([]);
  const { loggedUser } = useContext(AuthContext);

  const booking = bookings.filter(
    (room) =>
      room.status !== "Checked-In" &&
      room.status !== "Confirmed" &&
      room.status !== "Pending"
  );

  useEffect(() => {
    fetch(`http://localhost:5000/bookings/${loggedUser?.email}`)
      .then((res) => res.json())
      .then((data) => setBookingsData(data));
  }, []);

  console.log(bookings);

  return (
    <div>
      <h2 className="text-4xl font-semibold mt-4">Your rented Room</h2>

      {booking.map((room, index) => (
        <table className="table">
          <thead>
            <td>Room Image</td>
            <td>Room Type</td>
            <td>User Name</td>
            <td>NID</td>
            <td>Check-in/out</td>
            <td>Amount</td>
            <td>Total</td>
          </thead>
          <tbody>
            <tr>
              <td>
                <img className="w-24 h-16" src={room.image} alt="" />
              </td>
              <td>{room.room_name}</td>
              <td>{room.user_name}</td>
              <td>{room.nid}</td>
              <td>
                {room.from} <br />
                {room.to}
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

export default UserHistory;
