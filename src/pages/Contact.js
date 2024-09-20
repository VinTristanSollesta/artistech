import React from "react";

const Contact = () => {
  return (
    <div className="container h-screen pt-16 items-center flex justify-center">
      <div className="box-border border-2 rounded-lg sm:h-auto h-auto p-8 bg-zinc-50">
        <h1 className="text-center font-bold mb-4 text-xl">Contact Us</h1>
        <input
          className="box-border border-2 rounded-lg w-full p-4 mb-1"
          placeholder="Email"
          type="email"
        />

        <textarea
          className="box-border border-2 rounded-lg w-full p-4 mb-1"
          placeholder="Content"
          cols={8}
        />
      </div>
    </div>
  );
};

export default Contact;
