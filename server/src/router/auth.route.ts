import express from "express";
import passport from "passport";

export default (router: express.Router) => {
  router.post(
    "/auth",
    passport.authenticate("local"),
    (req: express.Request, res: express.Response) => {
      res.sendStatus(200);
    }
  );
  router.get("/auth/status", (req: express.Request, res: express.Response) => {
    req.user ? res.send(req.user) : res.sendStatus(401);
  });
  router.get("/auth/logout", (req: express.Request, res: express.Response) => {
    if (!req.user) return res.sendStatus(401);
    req.logout((err) => {
      if (err) return res.sendStatus(400);
      res.sendStatus(200);
    });
  });
  router.get("/auth/google", passport.authenticate("google"));
  router.get(
    "/auth/google/redirect",
    passport.authenticate("google"),
    (req: express.Request, res: express.Response) => {
      res.sendStatus(200);
    }
  );
};
