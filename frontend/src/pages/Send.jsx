import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import CardPage from "../components/CardPage";
import axios from "axios";

const Send = () => {
  const { id } = useParams();
  const token = "Bearer " + localStorage.getItem("token");
  const [amount, setAmount] = useState();
  const navigate = useNavigate();

  const moneyTransfer = async () => {
    console.log(id.substring(3, id.length));
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/account/transfer",
        {
          to: id.substring(3, id.length),
          amount: +amount,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      navigate("/dashboard");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;

    if (/^[0-9]*\.?[0-9]+$/.test(value)) {
      // Update the state if it's a valid positive number
      setAmount(value);
    }
  };

  return (
    <CardPage>
      <div className="flex flex-col items-center pt-10">
        <h1 className="text-2xl">Send money</h1>
      </div>
      <div className="flex flex-col pt-6 pb-6">
        <div className="w-10 flex items-center justify-between gap-4">
          <img
            className="rounded-full"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt="User Profile"
          />
          <p>UserName</p>
        </div>
        <div className="pt-2">
          <label>Amount (in Rs)</label>
          <input
            min="1"
            type="number"
            placeholder="1"
            value={amount}
            onChange={handleAmountChange}
            className="block mt-2 w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none"
          />
        </div>
      </div>
      <button
        onClick={moneyTransfer}
        className="flex flex-col items-center justify-center pb-5"
      >
        <div
          className="w-full bg-green-500 text-white p-1.5 rounded-md cursor-pointer" // Added cursor-pointer for better UX
        >
          Initiate Transfer
        </div>
      </button>
      <button className="flex flex-col items-center justify-center pb-10">
        <Link
          to="/dashboard"
          className="w-full bg-red-500 text-white p-1.5 rounded-md"
        >
          Cancel
        </Link>
      </button>
    </CardPage>
  );
};

export default Send;
