import React, { useContext, useState } from "react";
import { FaAddressCard, FaPhone, FaUser } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { AuthContext } from "../../../authProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const BookingForm = ({ isVisible, onClose, roomId, roomsData }) => {
  const [selectedFromDate, setSelectedFromDate] = useState(new Date());
  const [selectedToDate, setSelectedToDate] = useState(new Date());
  if (!isVisible) return null;

  const fromDate = selectedFromDate.toISOString().substring(0, 10);
  const toDate = selectedToDate.toISOString().substring(0, 10);

  // console.log(fromDate);

  const { loggedUser } = useContext(AuthContext);

  const room = roomsData?.filter((room) => room.room_id === roomId)[0];

  const handleFromDataChange = (event) => {
    setSelectedFromDate(new Date(event.target.value));
  };

  const handleToDataChange = (event) => {
    setSelectedToDate(new Date(event.target.value));
  };

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    // const user_name = form.value.name;
    const room_id = room?.room_id;
    const user_name = form.elements.name.value;
    const room_name = room?.room_name;
    const email = form.elements.email.value;
    const phone = form.elements.phone.value;
    const nid = form.elements.NID.value;
    const price = room?.price;
    const image = room?.image;
    const status = "Pending";

    const bookingData = {
      room_id: room_id,
      user_name: user_name,
      room_name: room_name,
      email: email,
      phone: phone,
      nid: nid,
      price: price,
      from: fromDate,
      to: toDate,
      status: status,
      image: image,
    };

    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingData),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: "Booking Confirmed",
          text: "Welcome to the Hotel Relax",
          icon: "success",
        });
        form.reset();
      });
  };

  return (
    <div className="fixed inset-0 bg-black  bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className=" flex flex-col">
        <button
          onClick={() => onClose()}
          className="btn btn-circle btn-outline border-black text-red-500 place-self-end"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="bg-gray-300 py-14 px-10 rounded-lg">
          <h1 className="text-2xl text-center font-semibold mb-5">
            {room?.room_name}
          </h1>
          <form
            className="text-center w-full"
            onSubmit={handleBooking}
            action=""
          >
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center">
                <input
                  type="text"
                  name="name"
                  defaultValue={loggedUser?.displayName}
                  placeholder="Enter Name"
                  className="pl-8 py-3 rounded-xl w-[100%] bg-[#F0EDFF]"
                  required
                />
                <FaUser className="absolute ml-3" />
              </div>

              <div className="flex items-center">
                <input
                  type="email"
                  name="email"
                  value={loggedUser?.email}
                  placeholder="Email"
                  className="pl-8 py-3 rounded-xl w-[100%] bg-[#F0EDFF]"
                  required
                />
                <MdMail className="absolute ml-3" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-8">
              <div className="flex items-center">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  className="pl-8 py-3 rounded-xl w-[100%] bg-[#F0EDFF]"
                  required
                />
                <FaPhone className="absolute ml-3" />
              </div>
              <div className="flex items-center">
                <input
                  type="tel"
                  name="NID"
                  placeholder="NID"
                  className="pl-8 py-3 rounded-xl w-[100%] bg-[#F0EDFF]"
                  required
                />
                <FaAddressCard className="absolute ml-3" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="mt-5">
                <label className="flex font-semibold">FROM</label>
                <input
                  className=" p-4 py-3 rounded-xl w-[100%] bg-[#F0EDFF]"
                  type="date"
                  value={selectedFromDate.toISOString().substring(0, 10)}
                  onChange={handleFromDataChange}
                  required
                />
              </div>
              <div className="mt-5">
                <label className="flex font-semibold">TO</label>
                <input
                  className=" p-4 py-3 rounded-xl w-[100%] bg-[#F0EDFF]"
                  type="date"
                  value={selectedToDate.toISOString().substring(0, 10)}
                  onChange={handleToDataChange}
                  required
                />
              </div>
            </div>

            <div>
              <input
                className="text-xl bg-[#bf9b79] px-6 py-2 rounded-md text-white hover:bg-[#dbb28c] hover:text-black mt-5"
                type="submit"
                value="Book Now"
              />
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BookingForm;
