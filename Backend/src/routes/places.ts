import express from "express";
import { getSearch } from "../controllers/place";

const router = express.Router();

router.get("/search", getSearch);

export default router;
