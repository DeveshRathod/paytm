import React from "react";
import { useNavigate } from "react-router-dom";

const Users = ({ user, id }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex items-center justify-between sm:pr-6">
        <div className="flex items-center gap-4">
          <div className="w-10">
            <img
              className="rounded-full"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt=""
            />
          </div>
          <div>
            <h2 className="font-bold text-xs sm:text-base">
              {user.firstName} {user.lastName}
            </h2>
          </div>
        </div>
        <div className="p-3 sm:p-4">
          <button
            onClick={() => {
              navigate(`/send/id=${id}`);
            }}
            className="bg-black text-white rounded-md p-2 text-xs sm:text-base"
          >
            Send Money
          </button>
        </div>
      </div>
    </div>
  );
};

export default Users;
