import express from "express";

import { createdPost, deletePost, getAllPosts, updatePost } from "../controllers/post.controller";

export default (router: express.Router) => {
  router.post("/posts", createdPost);
  router.get("/posts", getAllPosts);
  router.delete("/posts/:id", deletePost);
  router.patch("/posts/:id", updatePost);
};
