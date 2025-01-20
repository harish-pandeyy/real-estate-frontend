import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://real-estate-backend-pi.vercel.app/api",
  withCredentials: true,
});

export default apiRequest;
