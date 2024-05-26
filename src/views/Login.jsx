import React, { useState } from "react";

import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
const Login = () => {
  const [usernameFocused, setUsernameFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="card flex items-center bg-white p-5 min-w-[320px] w-full h-full h-screen sm:h-auto min-[530px]:px-28 sm:px-8 sm:shadow-md sm:rounded-2xl sm:m-auto sm:w-[400px]">
      <form action="" class="w-full">
        <div className="mb-5">
          <span className="font-semibold text-[25px]">Log In</span>
        </div>

        <div className="mb-8 relative">
          <input
            type="text"
            className="border border-gray-500 w-full hover:bg-gray-100 p-2 rounded-lg focus:outline-none focus:border-gray-600"
            value={usernameValue}
            onChange={(e) => setUsernameValue(e.target.value)}
            onFocus={() => setUsernameFocused(true)}
            onBlur={() => setUsernameFocused(false)}
          />
          <label
            htmlFor=""
            className={`block absolute duration-200 ${
              usernameFocused || usernameValue
                ? "-top-6 text-[14px] text-black left-0"
                : "top-2 text-gray-500 left-2"
            }`}
          >
            Username
          </label>
        </div>

        <div className="mb-2 relative">
          <input
            type={passwordVisible ? "text" : "password"}
            className="border border-gray-500 w-full hover:bg-gray-100 p-2 pr-9 rounded-lg focus:outline-none focus:border-gray-600"
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
            onFocus={() => setPasswordFocused(true)}
            onBlur={() => setPasswordFocused(false)}
          />
          <label
            htmlFor=""
            className={`block absolute duration-200 ${
              passwordFocused || passwordValue
                ? "-top-6 text-[14px] text-black left-0"
                : "top-2 text-gray-500 left-2"
            }`}
          >
            Password
          </label>

          <span className="block absolute top-2 right-2 duration-200">
            {passwordVisible ? (
              <VisibilityRoundedIcon
                className="cursor-pointer hover:bg-gray-200 p-1 rounded-xl"
                onClick={() => setPasswordVisible(!passwordVisible)}
              />
            ) : (
              <VisibilityOffRoundedIcon
                className="cursor-pointer hover:bg-gray-200 p-1 rounded-xl"
                onClick={() => setPasswordVisible(!passwordVisible)}
              />
            )}
          </span>
        </div>

        <div className="mb-10">
          <span className="cursor-pointer hover:underline hover:text-blue-800 text-[14px] text-blue-700">
            Forgot password?
          </span>
        </div>

        <div className="mb-1">
          <button className="bg-orange-500 text-white w-full p-2 rounded-3xl hover:bg-orange-600">
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
