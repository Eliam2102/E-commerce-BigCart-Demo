//AxiosConfig.ts
import axios from "axios";

//Se crea una instancia de la API
const axiosInstance = axios.create({
  // El URL corresponde a la API
  baseURL: "http://localhost:3000", 
  // Permite el uso de cookies
  withCredentials: true, 
});

export default axiosInstance;