import React from "react";
import { Link } from "react-router-dom";

const Appbar = ({ you }) => {
  return (
    <div className=" flex p-4 sm:p-10 justify-between w-full">
      <h1 className=" text-xl sm:text-2xl font-bold">Payments App</h1>
      <div className=" flex gap-3 items-center">
        <div>Hello, {you}</div>
        <div className=" w-10">
          <button>
            <img
              className=" rounded-full"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Appbar;
