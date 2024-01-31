import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Send from "./pages/Send";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Dashboard />} path="/dashboard" />
        <Route element={<SignIn />} path="/" />
        <Route element={<SignUp />} path="/signup" />
        <Route element={<Send />} path="/send/:id" />
      </Routes>
    </div>
  );
};

export default App;
