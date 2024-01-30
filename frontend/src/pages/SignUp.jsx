import React from "react";
import { Link } from "react-router-dom";
import CardPage from "../components/CardPage";
import InputBox from "../components/InputBox";
import LinkButton from "../components/LinkButton";

const SignUp = () => {
  return (
    <CardPage>
      <div className="flex flex-col items-center pt-10">
        <h1 className=" text-2xl">Sign Up</h1>
        <p className=" p-2">Enter Your Info to create an account</p>
      </div>
      <div className="flex flex-col items-center pt-4 pb-6">
        <InputBox placeholder="Devesh" type="text" label="First Name" />
        <InputBox placeholder="Rathod" type="text" label="Last Name" />
        <InputBox
          placeholder="devrathod@example.com"
          type="email"
          label="Email"
        />
        <InputBox placeholder="" type="password" label="Password" />
      </div>
      <LinkButton
        to="/dashboard"
        curr="Sign Up"
        text="Already Have an account? "
        warnLink="/"
        warnText="Sign In"
      />
    </CardPage>
  );
};

export default SignUp;
