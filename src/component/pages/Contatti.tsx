import React, { useState } from "react";
import { sendCustomEmail } from "../../useCustom/sendCustomEmail";

const Contatti = () => {
  const [data, setData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    sendCustomEmail(name, email, message);
  };

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div
      className="h-screen flex items-center justify-center p-2"
      onSubmit={handleSubmit}
    >
      <form
        action="post"
        className="flex flex-col w-[400px] bg-slate-500 p-5 rounded-md shadow-md"
      >
        <div className="text-center text-xl text-white uppercase font-bold">
          <h2>contattaci</h2>
        </div>

        <label className="ml-2 py-2">Name</label>
        <input
          type="name"
          name="name"
          className="p-2 bg-slate-200 rounded-md outline-none"
          onChange={handleChange}
          value={data.name}
        />

        <label className="ml-2 py-2">Email</label>
        <input
          type="email"
          name="email"
          className="p-2 bg-slate-200 rounded-md outline-none"
          onChange={handleChange}
          value={data.email}
        />

        <label className="ml-2 py-2">Messaggio</label>
        <textarea
          name="message"
          className="p-2 bg-slate-200 rounded-md outline-none"
          onChange={handleChange}
          value={data.message}
        ></textarea>

        <button className="bg-blue-800 p-2 text-white uppercase mt-10 rounded-md hover:bg-blue-700">
          submit
        </button>
      </form>
    </div>
  );
};

export default Contatti;
function add(name: void, email: any, message: any) {
  throw new Error("Function not implemented.");
}
