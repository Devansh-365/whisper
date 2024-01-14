import passport from "passport";
import { Strategy } from "passport-local";
import bcrypt from "bcrypt";

import { getUserById, getUserByUserName } from "../models/user.model";

passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id: any, done) => {
  try {
    const user = await getUserById(id).select(
      "+authentication.salt +authentication.password"
    );
    if (!user) throw new Error("User Not Found");
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

export default passport.use(
  new Strategy(async (username, password, done) => {
    try {
      const findUser: any = await getUserByUserName(username).select(
        "+authentication.salt +authentication.password"
      );
      if (!findUser) throw new Error("User not found");
      if (!bcrypt.compare(password, findUser.authentication.password))
        throw new Error("Bad Credentials");
      done(null, findUser);
    } catch (err) {
      done(err, null);
    }
  })
);
