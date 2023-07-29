import axios from "axios";

const API_URL = "http://localhost:8000/monstruos/";

export const getMonstruos = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createMonstruo = async (monstruoData) => {
  const response = await axios.post(API_URL, monstruoData);
  return response.data;
};
