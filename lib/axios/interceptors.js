import axios from "axios";
import { getCookie, setCookie } from "cookies-next";

import axiosInstance from "@/lib/axios";

const authFetch = axios.create({
  baseURL: "http://localhost:8000",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

authFetch.interceptors.request.use(async (config) => {
  const access_token = getCookie("access_token");
  if (access_token) {
    config.headers["Authorization"] = "Bearer " + access_token;
  }
  return config;
});

async function refreshAccessToken() {
  const refresh_token = getCookie("refresh_token");

  const response = await axiosInstance.post("/api/token/refresh/", {
    refresh: refresh_token,
  });

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

authFetch.interceptors.response.use(
  async (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error?.config;

    if (error?.response?.status === 401 && !originalRequest?.sent) {
      originalRequest.sent = true;

      const response = await refreshAccessToken();

      if (response?.access) {
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

export default authFetch;
