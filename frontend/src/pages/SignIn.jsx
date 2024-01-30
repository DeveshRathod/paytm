import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="flex min-h-screen justify-center items-center bg-gray-100">
      <div className="flex flex-col w-96 bg-white p-6 rounded-md shadow-md">
        <div className="flex flex-col items-center pt-10">
          <h1 className=" text-2xl">Sign In</h1>
          <p>Enter Your details to login into account</p>
        </div>
        <div className="flex flex-col items-center pt-6 pb-6">
          <div className=" pt-2">
            <label>Email</label>
            <input
              type="email"
              placeholder="Email"
              className="block mt-2 w-72 rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none"
            />
          </div>
          <div className=" pt-2">
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              className="block w-72 mt-2 rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center pb-10">
          <Link
            className="w-full bg-black text-white p-1.5 flex items-center justify-center rounded-md"
            to="/dashboard"
          >
            <button>Sign In</button>
          </Link>
          <p>
            Dont have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
