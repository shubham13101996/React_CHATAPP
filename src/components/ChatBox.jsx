import React from "react";
import Message from "./Message";

const ChatBox = () => {
  const messages = [
    {
      id: 1,
      text: "hello",
      name: "Simba",
    },
    {
      id: 2,
      text: "hola",
      name: "Bagheera",
    },
  ];
  return (
    <div className="pb-44 pt-20 containerWrap">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
};

export default ChatBox;
