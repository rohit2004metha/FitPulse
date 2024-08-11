import jwt from "jsonwebtoken";
import { createError } from "../error.js";

// Hard-coded JWT secret key (for testing purposes only)
const JWT_SECRET_KEY = " Rohit Metha "; // Replace this with your actual secret key


export const verifyToken = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return next(createError(401, "You are not authenticated!"));
    }

    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      return next(createError(401, "You are not authenticated"));
    }

    const decode = jwt.verify(token, JWT_SECRET_KEY);
    req.user = decode;
    return next();
  } catch (err) {
    next(err);
  }
};
