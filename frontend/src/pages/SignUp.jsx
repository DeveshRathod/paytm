import React, { useState } from "react";
import CardPage from "../components/CardPage";
import InputBox from "../components/InputBox";
import LinkButton from "../components/LinkButton";
import axios from "axios";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <CardPage>
      <div className="flex flex-col items-center pt-10">
        <h1 className=" text-2xl">Sign Up</h1>
        <p className=" p-2">Enter Your Info to create an account</p>
      </div>
      <div className="flex flex-col items-center pt-4 pb-6">
        <InputBox
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          placeholder="Devesh"
          type="text"
          label="First Name"
        />
        <InputBox
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          placeholder="Rathod"
          type="text"
          label="Last Name"
        />
        <InputBox
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="deveshrathod@example.com"
          type="email"
          label="Email"
        />
        <InputBox
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder=""
          type="password"
          label="Password"
        />
      </div>
      <LinkButton
        to="/dashboard"
        curr="Sign Up"
        text="Already Have an account? "
        warnLink="/"
        warnText="Sign In"
        onClick={async () => {
          const response = await axios.post(
            "http://localhost:3000/api/v1/user/signup",
            {
              username: email,
              firstName,
              lastName,
              password,
            }
          );
          const data = JSON.parse(response.data.userDetails);
          localStorage.setItem("user", data.username);
          localStorage.setItem("token", response.data.token);
        }}
      />
    </CardPage>
  );
};

export default SignUp;
