import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex min-h-screen justify-center items-center bg-gray-100">
      <div className="flex flex-col w-96 bg-white p-6 rounded-md shadow-md">
        <div className="flex flex-col items-center pt-10">
          <h1 className=" text-2xl">Sign Up</h1>
          <p>Enter Your Info to create an account</p>
        </div>
        <div className="flex flex-col items-center pt-6 pb-6">
          <div className=" pt-2">
            <label>First Name</label>
            <input
              type="text"
              className="block mt-2 w-72 rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none"
              placeholder="Devesh"
            />
          </div>
          <div className=" pt-2">
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Rathod"
              className="block mt-2 w-72 rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none"
            />
          </div>
          <div className=" pt-2">
            <label>Email</label>
            <input
              type="email"
              placeholder="deveshrathod@example.com"
              className="block mt-2 w-72 rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none"
            />
          </div>
          <div className=" pt-2">
            <label>Password</label>
            <input
              type="password"
              placeholder="at least 8"
              className="block w-72 mt-2 rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center pb-10">
          <button className="w-full bg-black text-white p-1.5 rounded-md">
            <Link to="/dashboard">Sign Up</Link>
          </button>
          <p>
            Already have an account? <Link to="/signin">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
