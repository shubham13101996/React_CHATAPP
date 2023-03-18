import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { currentUser, sighinWithGoogle } = UserAuth();
  console.log(currentUser);

  const handleLogin = async () => {
    try {
      await sighinWithGoogle();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (currentUser) {
      navigate("/chat");
    }
  }, [currentUser]);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there 😎</h1>
          <p className="py-6">
            Join the converstaion, meet new people, and make connection in one
            shared room.
          </p>
          <h1 className="text-3xl font-bold underline">
            🤴🏻 Welcome to INSTANTCHAT App 👸🏻
          </h1>

          <button onClick={handleLogin} className="btn btn-primary">
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
