import React, { useState } from "react";
import { FaAddressCard, FaLock, FaPhone, FaUser } from "react-icons/fa";
import { MdMail } from "react-icons/md";

const BookingForm = () => {
  const [selectedFromDate, setSelectedFromDate] = useState(new Date());
  const [selectedToDate, setSelectedToDate] = useState(new Date());

  let bookingFromDate = selectedFromDate.toDateString().substring(0, 16);
  let bookingToDate = selectedToDate.toDateString().substring(0, 16);

//   console.log(bookingFromDate);

  const handleFromDataChange = (event) => {
    setSelectedFromDate(new Date(event.target.value));
  };

  const handleToDataChange = (event) => {
    setSelectedToDate(new Date(event.target.value));
  };

  const handleBooking = (event) => {
    event.preventDefault();
    
  };

  return (
    <div className="LoginBg flex justify-center items-center py-28">
      <div className="bg-[#ffffff7f] rounded-3xl w-[50%] py-20">
        <h1 className="text-4xl text-center mb-6">Registration Form</h1>
        <p className="text-xl text-center mb-5 text-black">
          How to i get started with Hotel Relax
        </p>

        {/* this is the form section */}
        <div className="flex items-center justify-center px-5 md:px-24">
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
                />
              </div>
              <div className="mt-5">
                <label className="flex font-semibold">TO</label>
                <input
                  className=" p-4 py-3 rounded-xl w-[100%] bg-[#F0EDFF]"
                  type="date"
                  value={selectedToDate.toISOString().substring(0, 10)}
                  onChange={handleToDataChange}
                />
              </div>
            </div>

            {/* <div className="flex justify-center">
              <p className="text-[#DE3F3F] bg-white mt-3 px-4">
                {registrationError}
              </p>
            </div> */}

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
    </div>
  );
};

export default BookingForm;
