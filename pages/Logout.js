// Importing necessary functions and hooks from external dependencies
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/router";
import { useEffect } from "react";

// Defining a functional component called Logout
export default function Logout() {
  // Using useRouter hook to access the router object
  const router = useRouter();
  // Defining a function to remove cookies and redirect user to login page
  const removeCookie = () => {
    deleteCookie("access_token");
    deleteCookie("refresh_token");
    router.push("/Login"); //This can be redirected to anywhere this one redirects to Login
  };
  // Using useEffect hook to call removeCookie function when the component mounts
  useEffect(() => {
    // Checking if window is defined (runs in browser) before calling removeCookie
    if (typeof window !== "undefined") removeCookie();
  });

  // Component returns null as it doesn't render any HTML
  return null;
}
