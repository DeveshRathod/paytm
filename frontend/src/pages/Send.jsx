import React from "react";
import { Link } from "react-router-dom";

const Send = () => {
  return (
    <div className="flex min-h-screen justify-center items-center bg-gray-100">
      <div className="flex flex-col w-96 bg-white p-6 rounded-md shadow-md">
        <div className="flex flex-col items-center pt-10">
          <h1 className=" text-2xl">Send money</h1>
        </div>
        <div className="flex flex-col  pt-6 pb-6">
          <div className=" w-10 flex items-center justify-between gap-4">
            <img
              className=" rounded-full"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt=""
            />
            <p>UserName</p>
          </div>
          <div className=" pt-2">
            <label>Amount (in Rs)</label>
            <input
              type="number"
              placeholder="0"
              className="block mt-2 w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none"
            />
          </div>
        </div>
        <button className="flex flex-col items-center justify-center pb-10">
          <Link
            to="/dashboard"
            className="w-full bg-green-500 text-white p-1.5 rounded-md"
          >
            Initiate Transfer
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Send;
