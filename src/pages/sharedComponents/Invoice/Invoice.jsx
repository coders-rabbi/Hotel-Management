import React from "react";
import logo from "../../../assets/logo.png";
import { ToastContainer } from "react-toastify";

const Invoice = ({ isVisible, onClose, bookingData, roomId }) => {
  if (!isVisible) return null;

  const booking = bookingData?.filter((room) => room?.room_id === roomId)[0];

  console.log(booking);

  return (
    <div className="fixed inset-0 bg-black  bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-10">
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
          <div className=" shadow-md w-[650px] m-auto p-7">
            <div className="flex items-center gap-10 mb-10">
              <img className="w-24" src={logo} alt="" />
              <h1 className="text-4xl">Hotel Relax</h1>
            </div>
            <div className="flex justify-between">
              <div>
                <h4 className="text-primary  font-bold mb-2">Billed To</h4>
                <p className="mb-1">Rabbi Mia</p>
                <p className="mb-1">Phone: 01303329413</p>
                <p className="mb-1">NID: 3329413</p>
              </div>
              <div>
                <div>
                  <h4 className="text-primary  font-bold mb-2">
                    Checked-In Date
                  </h4>
                  <p className="mb-1">{booking.from}</p>
                </div>
                <div>
                  <h4 className="text-primary font-bold mb-1 mt-4">
                    Checked-In Date
                  </h4>
                  <p className="mb-1">{booking.from}</p>
                </div>
              </div>
              <div>
                <h4 className="text-primary font-bold mb-2">Invoice Number</h4>
                <p>00110075</p>
              </div>
            </div>
            <hr className="border-primary  border-2 mb-7 mt-5" />
            <div className="flex justify-between">
              <h2>{booking.room_name}</h2>
              <div>
                <p>Amount: {booking.price} $</p>
              </div>
            </div>

            <p className="text-center mt-20">www.hotelrelax.com</p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Invoice;
