import React from "react";
import { generateUrl, recipesUrl, SERVER_URL } from "./url";

const getPopularService = async () => {
  const params = [
    { key: "number", value: 10 },
    { key: "tags", value: "vegetarian, dessert" },
  ];
  const url = generateUrl(recipesUrl, params);
  const api = await fetch(url);
  const data = await api.json();

  return data;
};

export default getPopularService;
