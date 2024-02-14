import express from "express";
import { Login } from "../controllers/auth";
import { check } from "express-validator";

const router = express.Router();

router.post(
  "/login",
  [
    check("email", "Email is required").isEmail(),
    check("password", "password with 5 or more characters required").isLength({
      min: 5,
    }),
  ],
  Login
);

export default router;
