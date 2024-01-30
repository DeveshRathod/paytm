import React from "react";
import { Link } from "react-router-dom";
import CardPage from "../components/CardPage";
import InputBox from "../components/InputBox";
import LinkButton from "../components/LinkButton";

const SignIn = () => {
  return (
    <CardPage>
      <div className="flex flex-col items-center pt-10">
        <h1 className=" text-2xl">Sign In</h1>
        <p className=" p-2">Enter Your details to login into account</p>
      </div>
      <div className="flex flex-col items-center pt-4 pb-6">
        <InputBox type="email" placeholder="email" label="Email" />
        <InputBox type="password" placeholder="password" label="Password" />
      </div>
      <LinkButton
        to="/dashboard"
        curr="Sign In"
        text="Dont have an account? "
        warnLink="/signup"
        warnText="Sign Up"
      />
    </CardPage>
  );
};

export default SignIn;
