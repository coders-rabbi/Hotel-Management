import React, { useContext, useState } from "react";
import { FaGoogle, FaUser } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../authProvider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
// import "../home/"

const Login = () => {
  const [signInError, setSinginError] = useState("");
  const { signIn, googleSingIn } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.code;
        if (errorMessage === "auth/invalid-credential") {
          setSinginError("Invalid Email/Passwprd");
        }
      });
  };

  const handleGoogleSingIn = () => {
    googleSingIn().then(async (result) => {
      const loggedUser = result.user;
      console.log(userInfo);
      navigate(from, { replace: true });
    });
  };

  return (
    <div className="LoginBg flex justify-center items-center py-28">
      <div className="bg-[#ffffff7f] rounded-3xl w-[50%] py-20">
        <h1 className="text-4xl text-center mb-6">Login</h1>
        <p className="text-xl text-center mb-5 text-black">
          How to i get started with Hotel Relax
        </p>

        {/* this is the form section */}
        <div className="flex items-center justify-center px-5 md:px-24">
          <form className="text-center w-full" onSubmit={handleLogin} action="">
            <div className="flex items-center">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="pl-8 py-3 rounded-xl w-[100%] bg-[#F0EDFF]"
                required
              />

              <FaUser className="absolute ml-3" />
            </div>
            <div className="flex items-center mt-5">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="pl-8 py-3 rounded-xl w-[100%] bg-[#F0EDFF]"
                required
              />
              <FaUser className="absolute ml-3" />
            </div>

            <div className="flex justify-center">
              <p className="bg-white mt-4 text-red-500 px-4">{signInError}</p>
            </div>

            <div>
              <input
                className="text-xl bg-[#bf9b79] px-6 py-2 rounded-md text-white hover:bg-[#dbb28c] hover:text-black mt-5"
                type="submit"
                value="Login"
              />
            </div>
          </form>
        </div>
        <div className="flex items-center justify-center gap-3 mt-3">
          <p>Are You New to Hotel Relax?</p>
          <Link
            to="/registration"
            className="text-xl text-[#fff] font-semibold"
          >
            Registration
          </Link>
        </div>

        <div className="grid grid-cols-3 justify-center items-center mt-8">
          <hr className="border-black" />
          <p className="text-xl text-black text-center font-bold">
            Login <span className="font-normal">with Others</span>
          </p>
          <hr className="border-gray-950" />
        </div>
        {/* Google Login and Another */}
        <div className="sm:flex justify-center items-center gap-5 mt-5">
          <div className="mb-5 sm:mb-0 ">
            <button
              onClick={handleGoogleSingIn}
              className="text-2xl font-semibold bg-white px-6 py-2 rounded-md flex items-center gap-2"
            >
              <FcGoogle />
              Google
            </button>
          </div>
          <div className="flex justify-center">
            <button className="text-2xl font-semibold bg-[#BF9B79] px-6 py-2 rounded-md">
              FcFacebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
