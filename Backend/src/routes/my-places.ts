import express from "express";
import multer from "multer";
import verifyToken from "../middleware/auth";
import { addPlace } from "../controllers/my-places";
import { body } from "express-validator";

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});
router.post(
  "/",
  verifyToken,
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("city").notEmpty().withMessage("City is required"),
    body("country").notEmpty().withMessage("Country is required"),
    body("description").notEmpty().withMessage("Description is required"),
    body("address").notEmpty().withMessage("Hotel address is required"),
    body("type").notEmpty().withMessage("Hotel type is required"),
  ],
  upload.array("imageFile", 6),
  addPlace
);

export default router;
