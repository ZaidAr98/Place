import express from "express";
import multer from "multer";
import verifyToken from "../middleware/auth";
<<<<<<< HEAD
<<<<<<< HEAD
import { addPlace, getPlaces,updatePlace,getPlace } from "../controllers/my-places";
=======
import { addPlace } from "../controllers/my-places";
>>>>>>> parent of 059dbd0 (get hotels)
=======
import { addPlace } from "../controllers/my-places";
>>>>>>> parent of 059dbd0 (get hotels)
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
    body("address").notEmpty().withMessage("Place address is required"),
    body("type").notEmpty().withMessage("Place type is required"),
  ],
  upload.array("imageFiles", 6),
  addPlace
);
<<<<<<< HEAD
<<<<<<< HEAD
router.get("/", verifyToken, getPlaces);
router.get("/:id", verifyToken, getPlace);
router.put("/:placeId", verifyToken, upload.array("imageFiles"), updatePlace);
=======
>>>>>>> parent of 059dbd0 (get hotels)
=======
>>>>>>> parent of 059dbd0 (get hotels)

export default router;
