import dotenv from "dotenv";
dotenv.config();

import express from "express";
import http from "http";
import cors from "cors";
import passport from "passport";
import session from "express-session";
import cookieParser from "cookie-parser";
import MongoStore from "connect-mongo";
import mongoose from "mongoose";

import router from "./router";
import connect from "./utils/connect";
import "./stragies/local.strategy";
// import "./stragies/google.strategy";

const app = express();

// const sessionStore = MongoStore.create({
//   client: mongoose.connection.getClient(),
// });

app.use(express.json());
app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser("whisper"));
app.use(
  session({
    secret: "AFF_BACKEND",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, httpOnly: false, maxAge: 60000 * 60 },
    // store: sessionStore,
    // cookie: {
    //   maxAge: 60000 * 60,
    //   httpOnly: false,
    //   secure: true,
    // },
  })
);
app.use(passport.initialize());
app.use(passport.session());

const server = http.createServer(app);

server.listen(8080, async () => {
  console.log("Server running on http://localhost:8080/");
  await connect();
});

app.use("/api", router());
