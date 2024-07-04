import React, { useContext, useState } from "react";
import { FaLock, FaPhone, FaUser } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../authProvider/AuthProvider";
// import "../home/"

const RegisterPage = () => {
  const [registrationError, setRegistrationError] = useState("");

  const { createUser, updateUserProfile } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/login";

  const handleRegistration = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        updateUserProfile(name);
        console.log(loggedUser);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;

        if (errorCode === "auth/weak-password") {
          setRegistrationError(
            "Password is too weak. Please Provide a strong password"
          );
        }

        if (errorCode === "auth/email-already-in-use") {
          setRegistrationError(
            "Email is already used. please provide a new email address."
          );
        }
      });
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
            onSubmit={handleRegistration}
            action=""
          >
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

            <div className="flex items-center mt-5">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="pl-8 py-3 rounded-xl w-[100%] bg-[#F0EDFF]"
                required
              />
              <MdMail className="absolute ml-3" />
            </div>
            <div className="flex items-center mt-5">
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                className="pl-8 py-3 rounded-xl w-[100%] bg-[#F0EDFF]"
                required
              />
              <FaPhone className="absolute ml-3" />
            </div>
            <div className="flex items-center mt-5">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="pl-8 py-3 rounded-xl w-[100%] bg-[#F0EDFF]"
                required
              />
              <FaLock className="absolute ml-3" />
            </div>

            <div className="flex justify-center">
              <p className="text-[#DE3F3F] bg-white mt-3 px-4">
                {registrationError}
              </p>
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
            to="/login"
            className="text-2xl font-semibold bg-[#BF9B79] px-6 py-2 rounded-md mt-4"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
