import express from "express";

import auth from "./auth.route";
import users from "./users.route";
import posts from "./posts.route";

const router = express.Router();

export default (): express.Router => {
  auth(router);
  users(router);
  posts(router);

  return router;
};
