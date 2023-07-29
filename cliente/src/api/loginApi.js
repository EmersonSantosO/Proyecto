import axios from "axios";

const API_URL = "http://localhost:8000/login/";

export const loginUser = async (username, password) => {
  const response = await axios.post(`${API_URL}api-token-auth/`, {
    username,
    password,
  });

  return response.data;
};
