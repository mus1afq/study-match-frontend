// Importing the axios library.
import axios from "axios";

// Creating a new axios instance with predefined configuration settings and exporting it as a default module.
const axiosInstance = axios.create({
  baseURL: "http://localhost:8000", // Setting up the base URL for the requests.
  timeout: 1000, // Defining the duration in milliseconds before timing out the request.
  headers: {
    // Setting the headers for the requests
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default axiosInstance; // Exporting the configured axios instance as a default module.
