import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

import { random } from "../utils/helpers";
import { createUser, getUserByEmail } from "../models/user.model";

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/auth/google/redirect",
      scope: ["email", "profile"],
    },
    async function (accessToken, refreshToken, profile, done) {
      let user: any = await getUserByEmail(profile.emails[0].value).select(
        "+authentication.salt +authentication.password"
      );
      if (!user) {
        user = await createUser({
          email: profile.emails[0].value,
          username: profile.displayName,
          authentication: {
            password: random(),
          },
        });
      }
      done(null, user);
    }
  )
);
