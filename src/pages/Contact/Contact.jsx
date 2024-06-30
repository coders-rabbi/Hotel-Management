import React, { useState } from "react";
import img01 from "../../assets/Image/rabbi.jpg";
import {
  FaFacebook,
  FaPhone,
  FaPhoneVolume,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (event) => {
    setSelectedDate(new Date(event.target.value));
  };

  return (
    <div>
      <div className="contactPage-MidBanner"></div>

      <div className="max-w-screen-xl m-auto flex justify-center gap-10 mt-20">
        <div className="flex items-center gap-4 border py-5 px-10">
          <img className="w-14 rounded-full" src={img01} alt="" />
          <div>
            <h2 className="text-2xl">Always at your Service</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>

        <div className="flex items-center border gap-4 py-5 px-10">
          <img className="w-14 rounded-full" src={img01} alt="" />
          <div>
            <h2 className="text-2xl">Always at your Service</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 mb-20">
        <div className="max-w-screen-xl m-auto grid grid-cols-6">
          <div className="bg-01 col-span-2 flex justify-center items-center">
            <div className="text-center">
              <h1 className="text-white text-2xl">RESEVE A ROOM</h1>
              <h2 className="text-white text-5xl mt-5">Get In Touch</h2>
              <p className="text-white mt-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                porttitor tellus vel mauris scelerisque accumsan. Maecenas quis
                nunc sed sapien dignissim pulvinar. Se d at gravida.
              </p>
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

      <div className="relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1825.2532927444922!2d90.38130697222776!3d23.80057860751062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a99c6c3973%3A0xb9a4fd4199c6e4b0!2z4KaV4Kay4KeN4Kav4Ka-4KaoIOCmuOCmruCmv-CmpOCmvw!5e0!3m2!1sen!2sbd!4v1719744654056!5m2!1sen!2sbd"
          width="100%"
          height="450"
          // style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="p-8  bg-[#BF9B79] text-white absolute top-1/3 left-1/2">
          <h1 className="text-xl font-semibold mb-2">Hotel Info</h1>
          <div className="flex items-center gap-4 mb-2">
            <FaMapLocationDot></FaMapLocationDot>
            <p>Building No- 10/ka, Mirpur Rd, Dhaka</p>
          </div>
          <div className="flex items-center gap-4 mb-2">
            <FaPhone></FaPhone>
            <p>+8801303329413</p>
          </div>
          <div className="flex items-center gap-4">
            <MdEmail></MdEmail>
            <p>codersrabbi@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
