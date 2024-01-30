import React from "react";
import { Link } from "react-router-dom";

const Users = () => {
  return (
    <div>
      <div className="flex items-center justify-between sm:pr-6">
        <div className=" flex items-center gap-4">
          <div className=" w-10">
            <img
              className=" rounded-full"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt=""
            />
          </div>
          <div>
            <h2 className=" font-bold">User</h2>
          </div>
        </div>
        <div className=" p-6 sm:p-4">
          <Link to="/send" className=" bg-black text-white rounded-md p-2">
            <button>Send Money</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Users;
