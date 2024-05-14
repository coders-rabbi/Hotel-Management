import React from "react";
import { CiTimer } from "react-icons/ci";
import {
  FaFacebook,
  FaPhoneVolume,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutgoingMail } from "react-icons/md";
import room1 from "../../../assets/Rooms/room-4.jpg";
import room2 from "../../../assets/Rooms/room-5.jpg";
import room3 from "../../../assets/Rooms/room-7.jpg";
import room4 from "../../../assets/Rooms/room-8.jpg";

const Footer = () => {
  return (
    <div className="bg-02 py-20 px-10 grid md:grid-cols-2 lg:grid-cols-4 justify-center">
      <div className="text-white">
        <h1 className="text-3xl mb-5">About Us</h1>
        <p className="">
          Sed sit amet nisl in velit viverra bibendum in ac nisi. <br /> Etiam
          efficitur dui vitae sem rutrum, id pretium nunc varius. <br />{" "}
          Vestibulum hendrerit malesuada .
        </p>
        <div className="flex itmes-center justify-center gap-4 bg-[#BF9B79] w-[150px] py-2 mt-10">
          <FaFacebook className="text-2xl" />
          <FaTwitter className="text-2xl" />
          <FaYoutube className="text-2xl" />
        </div>
      </div>
      <div>
        <h1 className="text-3xl text-white mb-5">All Contacts</h1>
        <div className="text-white">
          <div className="flex items-center gap-4 mb-4 text-xl">
            <FaLocationDot />
            <p>Mirpur-14, Dhaka, Bangladesh</p>
          </div>
          <div className="flex items-center gap-4 mb-4 text-xl">
            <FaPhoneVolume />
            <p>+880 13033 29413</p>
          </div>
          <div className="flex items-center gap-4 mb-4 text-xl">
            <MdOutgoingMail />
            <p>info@hotel.com</p>
          </div>
          <div className="flex items-center gap-4 mb-4 text-xl">
            <CiTimer />
            <p>08 am - 06 pm Friday Closed</p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-3xl text-white mb-5">Subscribe</h1>
        <p className="text-white">
          Sed sit amet nisl in velit viverra bibendum in ac nisi. Etiam
          efficitur dui vitae sem{" "}
        </p>
        <form action="" className=" text-white mr-10 mt-5">
          <input
            className="w-full p-3"
            type="email"
            name=""
            id=""
            placeholder="Enter your Email"
          />
          <div>
            <input
              className="bg-[#BF9B79] text-xl font-semibold px-10 py-3 mt-5"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
      <div>
        <h1 className="text-3xl text-white mb-5">Gallery</h1>
        <div className="grid grid-cols-4 gap-2">
          <img src={room1} alt="" />
          <img src={room2} alt="" />
          <img src={room3} alt="" />
          <img src={room4} alt="" />
          <img src={room1} alt="" />
          <img src={room2} alt="" />
          <img src={room3} alt="" />
          <img src={room4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
