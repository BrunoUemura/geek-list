import axios, { AxiosInstance } from "axios";
import dotenv from "dotenv";
dotenv.config();

const api: AxiosInstance = axios.create({
  baseURL: String(process.env.BACKEND_API),
});

export default api;
