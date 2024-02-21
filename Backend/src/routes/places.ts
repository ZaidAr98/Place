import express from "express";
import { getSearch,getPlaceDetails, fetchPlaces } from "../controllers/place";
import { param } from "express-validator";
const router = express.Router();

router.get("/search", getSearch);
router.get(
  "/:id",
  [param("id").notEmpty().withMessage("place Id is required")],
  getPlaceDetails
);
router.get("/",fetchPlaces)

export default router;
