import express from "express";

import { createUser, getUserByEmail } from "../models/user.model";
import { authentication, random } from "../utils/helpers";

export const createUserController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { email, username, password } = req.body;

    if (!email || !password) {
      return res.sendStatus(400);
    }

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
      return res.sendStatus(400);
    }

    const salt = random();
    const user = await createUser({
      email,
      username,
      authentication: {
        salt,
        password: await authentication(salt, password),
      },
    });

    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
