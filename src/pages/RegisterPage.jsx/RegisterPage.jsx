import React from "react";
import { FaLock, FaMailBulk, FaPhone, FaUser } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { Link } from "react-router-dom";
// import "../home/"

const RegisterPage = () => {

    


  return (
    <div className="LoginBg flex justify-center items-center py-28">
      <div className="bg-[#ffffff7f] rounded-3xl w-[50%] py-20">
        <h1 className="text-4xl text-center mb-6">Registration Form</h1>
        <p className="text-xl text-center mb-5 text-black">
          How to i get started with Hotel Relax
        </p>

        {/* this is the form section */}
        <div className="flex items-center justify-center px-5 md:px-24">
          <form className="text-center w-full" action="">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Enter Name"
                className="pl-8 py-3 rounded-xl w-[100%] bg-[#F0EDFF]"
                required
              />
              <FaUser className="absolute ml-3" />
            </div>

            <div className="flex items-center mt-5">
              <input
                type="email"
                placeholder="Email"
                className="pl-8 py-3 rounded-xl w-[100%] bg-[#F0EDFF]"
                required
              />
              <MdMail className="absolute ml-3" />
            </div>
            <div className="flex items-center mt-5">
              <input
                type="tel"
                placeholder="Phone"
                className="pl-8 py-3 rounded-xl w-[100%] bg-[#F0EDFF]"
                required
              />
              <FaPhone className="absolute ml-3" />
            </div>
            <div className="flex items-center mt-5">
              <input
                type="password"
                placeholder="Password"
                className="pl-8 py-3 rounded-xl w-[100%] bg-[#F0EDFF]"
                required
              />
              <FaLock className="absolute ml-3" />
            </div>
            <div>
              <input
                className="text-xl bg-[#bf9b79] px-6 py-2 rounded-md text-white hover:bg-[#dbb28c] hover:text-black mt-5"
                type="submit"
                value="Registration"
              />
            </div>
          </form>
        </div>

        <div className="grid grid-cols-3 justify-center items-center mt-8">
          <hr className="border-black" />
          <p className="text-xl text-black text-center font-bold">
            Already Have An Account
          </p>
          <hr className="border-gray-950" />
        </div>
        {/* Google Login and Another */}
        <div className="flex justify-center">
          <Link
            to="login"
            className="text-2xl font-semibold bg-[#BF9B79] px-6 py-2 rounded-md mt-4">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
