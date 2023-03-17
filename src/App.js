import React from "react";
import Navbar from "./components/Navbar";
import ChatRoom from "./pages/ChatRoom";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Login />} />
        <Route element={<ChatRoom />} />
      </Routes>
    </>
  );
};

export default App;
