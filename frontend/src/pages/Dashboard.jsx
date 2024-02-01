import React, { useEffect, useState } from "react";
import Users from "../components/Users";
import Appbar from "../components/Appbar";
import Balance from "../components/Balance";
import axios from "axios";

const Dashboard = ({ setIsAuthenticated }) => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");
  const [balance, setBalance] = useState(0);

  const you = localStorage.getItem("user");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = "Bearer " + localStorage.getItem("token");
        const response = await axios.get(
          `http://localhost:3000/api/v1/user/bulk?filter=${filter}`,
          {
            headers: {
              authorization: token,
            },
          }
        );
        const response2 = await axios.get(
          `http://localhost:3000/api/v1/account/balance`,
          {
            headers: {
              authorization: token,
            },
          }
        );
        setBalance(response2.data.balance);
        setUsers(response.data.users);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [filter, balance]);

  return (
    <div>
      <Appbar you={you} setIsAuthenticated={setIsAuthenticated} />
      <Balance balance={balance} />
      <div className="pl-6 sm:pl-10">
        <h1 className="text-xl font-bold pt-5">Users</h1>

        <input
          type="text"
          className="block mt-2 w-80 rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none"
          placeholder="Search users....."
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        />

        <div className="pt-4 overflow-y-scroll">
          {users && users.length > 0 ? (
            users.map((user, i) => (
              <Users key={user._id} id={user._id} user={user} />
            ))
          ) : (
            <p>No users available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
