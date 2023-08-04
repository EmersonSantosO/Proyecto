import axios from "axios";

export const getAllMonstruos = () => {
  return axios.get("http://localhost:8000/monstruos/");
};
