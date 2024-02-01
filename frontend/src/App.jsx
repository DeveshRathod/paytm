import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Send from "./pages/Send";
import axios from "axios";

const App = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const ProtectedRoute = ({ element, ...rest }) => {
    return isAuthenticated ? element : <Navigate to="/" />;
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = "Bearer " + localStorage.getItem("token");
        const response = await axios.get(
          "http://localhost:3000/api/v1/user/me",
          {
            headers: {
              authorization: token,
            },
          }
        );

        if (response.data) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        setIsAuthenticated(false);
      } finally {
        if (isAuthenticated) {
          navigate("/dashboard");
        }
      }
    };

    fetchUser();
  }, [isAuthenticated, setIsAuthenticated]);

  return (
    <div>
      <Routes>
        <Route
          path="/dashboard"
          element={<ProtectedRoute element={<Dashboard />} />}
        />
        <Route
          path="/"
          element={<SignIn setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route
          path="/signup"
          element={<SignUp setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route
          path="/send/:id"
          element={<ProtectedRoute element={<Send />} />}
        />
      </Routes>
    </div>
  );
};

export default App;
