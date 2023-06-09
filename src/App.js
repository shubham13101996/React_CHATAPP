import React from "react";
import Navbar from "./components/Navbar";
import ChatRoom from "./pages/ChatRoom";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import { PrivateRoutes } from "./routes/PrivateRoutes";
import { AuthProvider } from "./context/AuthContext";
const App = () => {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/chat"
            element={
              <PrivateRoutes>
                <ChatRoom />
              </PrivateRoutes>
            }
          />
        </Routes>
      </AuthProvider>
    </>
  );
};

export default App;
