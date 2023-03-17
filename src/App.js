import React from "react";
import Navbar from "./components/Navbar";
import ChatRoom from "./pages/ChatRoom";
import Login from "./pages/Login";
const App = () => {
  return (
    <>
      <Navbar />
      {/* <Login /> */}
      <ChatRoom />
    </>
  );
};

export default App;
