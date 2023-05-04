// Importing Axios and cookies-next libraries along with an Axios instance with predefined configuration.
import axios from "axios";
import { getCookie, setCookie } from "cookies-next";
import axiosInstance from "@/lib/axios";

// Creating a new Axios instance for handling the authentication requests.
const authFetch = axios.create({
  baseURL: "http://localhost:8000", // Setting up the base URL for the authentication requests.
  timeout: 1000, //Defining the duration in milliseconds before timing out the request.
  headers: {
    // Setting the headers for the authentication requests.
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Adding an interceptor for handling the authentication token
authFetch.interceptors.request.use(async (config) => {
  const access_token = getCookie("access_token"); // Getting the access token from the cookie.
  if (access_token) {
    config.headers["Authorization"] = "Bearer " + access_token; // Setting the Authorization header to include the access token.
  }
  return config;
});

// Function for refreshing the access token when it expires.
async function refreshAccessToken() {
  const refresh_token = getCookie("refresh_token"); // Getting the refresh token from the cookie.

  const response = await axiosInstance.post("/api/token/refresh/", {
    refresh: refresh_token,
  }); // Making a request to the API for refreshing the access token.

  // If the request was successful, renewing the access token by setting it in the cookie.
  if (response.status === 200) {
    setCookie("access_token", response.data.access);
    setCookie("refresh_token", response.data.refresh);
  } else if (response.status === 401) {
    console.log(response.data);
  } else {
    console.log(response);
  }

  return response.data;
}
// Adding an interceptor for handling unauthorized requests.
authFetch.interceptors.response.use(
  async (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error?.config;

    if (error?.response?.status === 401 && !originalRequest?.sent) {
      // If the request failed because it was unauthorized and wasn't attempted before.
      originalRequest.sent = true; // Set a flag to indicate that this request has already been sent.

      const response = await refreshAccessToken(); // Calling the function to refresh the access token.

      if (response?.access) {
        // If the access token is renewed, resending the original request with the new access token.
        originalRequest.headers = {
          ...originalRequest.headers,
          Authorization: `Bearer ${response.access}`,
        };
      }

      return axios(originalRequest);
    }

    return Promise.reject(error);
  }
);

export default authFetch; // Exporting the configured Axios instance as a default module.
