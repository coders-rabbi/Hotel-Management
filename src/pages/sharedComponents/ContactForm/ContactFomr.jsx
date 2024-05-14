import React, { useState } from "react";
import "../../home/BackgroundImage.css";

const ContactFomr = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (event) => {
    setSelectedDate(new Date(event.target.value));
  };
  return (
    <div className="contactForm-banner py-28">
      <div className="max-w-screen-xl m-auto grid grid-cols-6">
        <div className="bg-01 col-span-2 flex justify-center items-center">
          <div className="text-center">
            <h1 className="text-white text-5xl">OUR</h1>
            <h2 className="text-white text-3xl mt-5">Timing</h2>
            <p className="text-white text-xl mt-6">Monday - Thursday</p>
            <p className="text-white text-xl mt-6">07:00am - 10:00pm</p>
            <p className="text-white text-xl mt-6">Friday - Sunday</p>
            <p className="text-white text-xl mt-6">07:00am - 50:00pm</p>
            <h1 className="text-white text-3xl mt-6">+880 1303 329413</h1>
          </div>
        </div>
        <div className="bg-02 col-span-4 flex justify-center items-center py-16">
          <div className="text-center">
            <h1 className="text-[#BF9B79] text-xl uppercase mb-5">
              Stay in Contact
            </h1>
            <h1 className="text-5xl font-semibold mb-5 text-white">
              Get in Touch
            </h1>
            <div>
              <form action="">
                <div className="flex gap-5">
                  <input
                    className="w-[350px] text-xl px-5 py-2"
                    type="text"
                    placeholder="Name"
                  />
                  <input
                    className="w-[350px] text-xl px-5 py-2"
                    type="text"
                    placeholder="Phone"
                  />
                </div>
                <div className="flex gap-5 mt-5">
                  <input
                    className="w-[350px] text-xl px-5 py-2"
                    type="email"
                    placeholder="Enter Email"
                  />
                  <input
                    className="text-black w-[350px] text-xl px-5 py-2"
                    type="date"
                    value={selectedDate.toISOString().substring(0, 10)}
                    onChange={handleDateChange}
                  />
                </div>
                <div>
                  <textarea
                    className="w-full mt-5 text-xl px-5 py-2"
                    rows={7}
                    placeholder="Message"
                  />
                </div>
                <input
                  className="btn btn-block mt-5"
                  type="submit"
                  value="Send"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFomr;
