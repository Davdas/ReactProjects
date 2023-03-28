import React, { useState } from "react";
import emailjs from "@emailjs/browser";

interface FormData {
  user_name: string;
  user_email: string;
  message: string;
}

const Home = () => {
  const form = React.useRef<HTMLFormElement>(null);
  const [data, setData] = useState<FormData>({
    user_name: "",
    user_email: "",
    message: "",
  });

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_YOUR_SERVICE_ID!,
        process.env.REACT_APP_YOUR_TEMPLATE_ID!,
        //@ts-ignore
        form.current,
        process.env.REACT_APP_YOUR_PUBLIC_KEY!
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="h-[500px] w-[400px] flex justify-center items-center m-auto bg-slate-500">
      <form ref={form} className="flex flex-col" onSubmit={sendEmail}>
        <label className="ml-2 py-2">Name</label>
        <input
          className="p-2 bg-slate-200 rounded-md outline-none"
          type="text"
          name="user_name"
          required
          onChange={(e) => setData({ ...data, user_name: e.target.value })}
        />
        <label className="ml-2 py-2">Email</label>
        <input
          className="p-2 bg-slate-200 rounded-md outline-none"
          type="email"
          name="user_email"
          required
          onChange={(e) => setData({ ...data, user_email: e.target.value })}
        />
        <label className="ml-2 py-2">Message</label>
        <textarea
          name="message"
          className="p-2 rounded-md outline-none"
          required
          onChange={(e) => setData({ ...data, message: e.target.value })}
        />

        <button className="bg-blue-800 p-2 text-white uppercase mt-10 rounded-md hover:bg-blue-700">
          submit
        </button>
      </form>
    </div>
  );
};

export default Home;
