import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import Swal from "sweetalert2";

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

  const handleStatusUpdate = (status, id) => {
    console.log(status, id);
    const statusUpdate = { status };

    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(statusUpdate),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            title: "Update!",
            text: "Status update successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
        refetch();
      });
  };

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
                {/* <button className="btn btn-error">{room.status}</button> */}
                <div className="dropdown dropdown-bottom text-black">
                  <label tabIndex={0} className="">
                    <button className="btn btn-error">{room.status}</button>
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100  w-48"
                  >
                    <li onClick={() => handleStatusUpdate("Pending", room._id)}>
                      <a>Pending</a>
                    </li>
                    <li
                      onClick={() => handleStatusUpdate("Confirmed", room._id)}
                    >
                      <a>Confirmed</a>
                    </li>
                    <li
                      onClick={() => handleStatusUpdate("Canceled", room._id)}
                    >
                      <a>Canceled</a>
                    </li>
                    <li
                      onClick={() => handleStatusUpdate("Checked-In", room._id)}
                    >
                      <a>Checked-In</a>
                    </li>
                    <li
                      onClick={() =>
                        handleStatusUpdate("Checked-Out", room._id)
                      }
                    >
                      <a>Checked-Out</a>
                    </li>
                  </ul>
                </div>
              </td>
              <td>
                <button className="btn btn-primary">Invoice</button>
              </td>
            </tr>
          </tbody>
        </table>
      ))}
      <ToastContainer />
    </div>
  );
};

export default Booking;
