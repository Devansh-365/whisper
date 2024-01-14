import dotenv from "dotenv";
dotenv.config();

import express from "express";
import http from "http";
import cors from "cors";
import passport from "passport";
import session from "express-session";

import router from "./router";
import connect from "./utils/connect";
import "./stragies/local.strategy";

const app = express();

app.use(
  cors({
    credentials: true,
  })
);
app.use(
  session({
    secret: "AFF_BACKEND",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

const server = http.createServer(app);

server.listen(8080, async () => {
  console.log("Server running on http://localhost:8080/");
  await connect();
});

app.use("/api", router());
