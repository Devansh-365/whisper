import axios from "axios";

import { BASE_URL } from "../config";

export const register = async (user: any) => {
  try {
    const res = await axios.post(`${BASE_URL}/api/users/register`, user);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const login = async (user: any) => {
  try {
    const res = await axios.post(`${BASE_URL}/api/auth`, user, {
      withCredentials: true,
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const logout = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/api/auth/logout`, {
      withCredentials: true,
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const authStatus = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/api/auth/status`, {
      withCredentials: true,
    });
    return res.statusText;
  } catch (err) {
    console.log(err);
  }
};
