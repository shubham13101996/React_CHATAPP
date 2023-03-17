import React, { useState } from "react";

const SendMessage = () => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    setValue("");
  };

  return (
    <div className="bg-gray-200 fixed bottom-0 w-full py-10 shadow-lg">
      <form onSubmit={handleSubmit} className="px-2 containerWrap flex">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="input w-full focus:outline-none bg-gray-100 rounded-r-none "
          type="text"
        />
        <button
          type="submit"
          className="w-auto bg-gray-500 text-white rounded-r-xl px-5 text-sm "
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default SendMessage;
