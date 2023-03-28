import { addDoc, collection } from "firebase/firestore";
import React from "react";
import { db } from "../firebase";

export const sendCustomEmail = async (
  name: string,
  email: string,
  message: string
) => {
  const collectionRef = collection(db, "email");
  const emailContent = {
    to: email,
    message: {
      name: name,
      body: message,
    },
  };

  await addDoc(collectionRef, emailContent);
};
