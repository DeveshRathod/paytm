import React, { useState } from "react";
import axios from "axios";
import CardPage from "../components/CardPage";
import InputBox from "../components/InputBox";
import LinkButton from "../components/LinkButton";

const SignIn = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <CardPage>
      <div className="flex flex-col items-center pt-10">
        <h1 className=" text-2xl">Sign In</h1>
        <p className=" p-2">Enter Your details to login into account</p>
      </div>
      <div className="flex flex-col items-center pt-4 pb-6">
        <InputBox
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          placeholder="email"
          label="Email"
        />
        <InputBox
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="password"
          label="Password"
        />
      </div>
      <LinkButton
        to="/dashboard"
        curr="Sign In"
        text="Dont have an account? "
        warnLink="/signup"
        warnText="Sign Up"
        onClick={async () => {
          const response = await axios.post(
            "http://localhost:3000/api/v1/user/signin",
            {
              username: email,
              password,
            }
          );
          const data = JSON.parse(response.data.userDetails);
          setIsAuthenticated(true);
          localStorage.setItem("user", data.username);
          localStorage.setItem("token", response.data.token);
        }}
      />
    </CardPage>
  );
};

export default SignIn;
