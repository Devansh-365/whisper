import { createUserController } from "../controllers/user.controller";
import express from "express";

export default (router: express.Router) => {
  router.post("/users/register", createUserController);
};
