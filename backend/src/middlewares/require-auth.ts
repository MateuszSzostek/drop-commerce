import { Request, Response, NextFunction } from "express";
import { NotAuthorizedError } from "../errors/not-authorized-error";
import jwt from "jsonwebtoken";

interface UserPayload {
  id: string;
  email: string;
}

export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //@ts-ignore
  //console.log("TOKEN require auth: ", req.session.token);
  //@ts-ignore

  if (!req.session.token) {
    // console.log(req);
    throw new NotAuthorizedError();
  }

  try {
    if (req.session !== null && req.session !== undefined) {
      const payload = jwt.verify(
        req.session.token || "",
        process.env.JWT_KEY!
      ) as UserPayload;

      // console.log(payload);

      req.body.userId = payload.id;
    }
  } catch (err) {}

  next();
};
