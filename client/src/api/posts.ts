import axios from "axios";

import { BASE_URL } from "../config";

export const getPosts = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/api/posts`, {
      withCredentials: true,
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const createPost = async (post: any) => {
  try {
    const res = await axios.post(`${BASE_URL}/api/posts`, post, {
      withCredentials: true,
    });
    console.log("RES: ", res)
    return res;
  } catch (err) {
    console.log(err);
  }
};
