import React, { useEffect, useState } from "react";
import demoImg from "../../../assets/Rooms/room-5.jpg";
import Swal from "sweetalert2";
import { ToastContainer } from "react-toastify";

const UserDashboardHome = () => {
  const [bookingData, setBookingData] = useState([]);
  const booking = bookingData.filter(
    (room) => room.status !== "Checked-Out" && room.status !== "Canceled"
  );

  useEffect(() => {
    fetch("http://localhost:5000/bookings")
      .then((res) => res.json())
      .then((data) => setBookingData(data));
  }, []);

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
            title: "Canceled!",
            text: "Your Booking has been Canceled",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
        refetch();
      });
  };

  return (
    <div className="mt-4">
      <h2 className="text-4xl font-semibold">Your rented Room</h2>

      {booking.map((room, index) => (
        <div className="border mt-10 flex justify-center items-center gap-8 py-5">
          <div>
            <img className="w-72" src={room.image} alt="" />
          </div>

          <div>
            <h3 className="text-3xl font-semibold mb-3">{room.room_name}</h3>
            <h4 className="text-xl font-semibold">2 Days & 1 Night</h4>
            <p className="text-xl font-semibold mt-3">Bill: {room.price} $</p>
            <div className="flex items-center gap-8 mt-3">
              <p className="text-xl font-semibold">
                From: <span className="text-sm">{room.from}</span>
              </p>
              <p className="text-xl font-semibold">
                To: <span className="text-sm">{room.to}</span>
              </p>
            </div>
            <p className="text-xl font-semibold mt-4">
              Status: <span className="font-normal">{room.status}</span>
            </p>
            <div className="mt-4">
              {room.status === "Pending" ? (
                <>
                  <button
                    onClick={() => handleStatusUpdate("Canceled", room._id)}
                    className="btn btn-error"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button className="btn btn-active btn-secondary">
                    Invoice
                  </button>
                </>
              )}
            </div>

            {/* <div className="sm:flex items-center gap-5 mt-5">
              <div className="flex justify-center mb-5 sm:mb-0 ">
                <button className="btn btn-accent">{room.status}</button>
              </div>
              <div className="flex justify-center">
                
              </div>
            </div> */}
          </div>
        </div>
      ))}
      <ToastContainer />
    </div>
  );
};

export default UserDashboardHome;
