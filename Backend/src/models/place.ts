import mongoose from "mongoose";
import {PlaceType } from "../shared/type";



const placeSchema = new mongoose.Schema<PlaceType>({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  description: { type: String, required: true },
  address: { type: String, required: true },
  facilities: [{ type: String, required: true }],
  starRating: { type: Number, required: true, min: 1, max: 5 },
  imageUrls: [{ type: String, required: true }],
  lastUpdated: { type: Date, required: true },
});

const Place = mongoose.model<PlaceType>("Place", placeSchema);
export default Place;