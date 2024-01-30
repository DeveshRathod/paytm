import React from "react";
import { Link } from "react-router-dom";
import Users from "../components/Users";
import Appbar from "../components/Appbar";
import Balance from "../components/Balance";

const Dashboard = () => {
  return (
    <div>
      <Appbar />
      <Balance />
      <div className="pl-6 sm:pl-10">
        <h1 className=" text-xl font-bold pt-5">Users</h1>
        <input
          type="text"
          className=" block mt-2 w-80 rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none"
          placeholder="Search users....."
        />
        <div className=" pt-4">
          <Users />
          <Users />
          <Users />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
