import React from "react";

const Balance = ({ balance }) => {
  return (
    <div className=" pl-6 sm:pl-10">
      <h1 className=" text-xl">
        <span className="  font-bold">Your Balance : </span>Rs.{balance}
      </h1>
    </div>
  );
};

export default Balance;
