import Cookies from "js-cookie";

export const getAccessToken = () => Cookies.get("connect.sid");
export const getRefreshToken = () => Cookies.get("refresh_token");
export const isAuthenticated = () => !!getAccessToken();
