import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export const getPosts = async () => {
  const { data } = await api.get("/posts");
  return data;
};
