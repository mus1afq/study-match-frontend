import { deleteCookie } from "cookies-next";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Logout() {
  const router = useRouter();

  const removeCookie = () => {
    deleteCookie("access_token");
    deleteCookie("refresh_token");
    router.push("/Login");
  };

  useEffect(() => {
    if (typeof window !== "undefined") removeCookie();
  });

  return null;
}
