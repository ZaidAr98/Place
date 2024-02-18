import { Request, Response } from "express";
import cloudinary from "cloudinary";
import { PlaceType } from "../shared/type";
import Place from "../models/place";


export const addPlace = async (req: Request, res: Response) => {
  try {
    const imageFiles = req.files as Express.Multer.File[];

    const newPlace: PlaceType = req.body;

    const imageUrls = await uploadImages(imageFiles);
    newPlace.imageUrls = imageUrls;
    newPlace.lastUpdated = new Date();
    newPlace.userId = req.userId;
    const place = new Place(newPlace);
    await place.save();
    res.status(201).send(place);
  } catch (error) {
    console.log("Error creating hotel: ", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};





async function uploadImages(imageFiles: Express.Multer.File[]) {
  const uploadPromises = imageFiles.map(async (image) => {
    const b64 = Buffer.from(image.buffer).toString("base64");
    let dataURI = "data:" + image.mimetype + ";base64," + b64;
    const res = await cloudinary.v2.uploader.upload(dataURI);
    return res.url;
  });

  const imageUrls = await Promise.all(uploadPromises);
  return imageUrls;
}


export const getPlaces = async (req: Request, res: Response) => {
  try {
    const places = await Place.find({ userId: req.userId });
    res.json(places);
  } catch (error) {
    res.status(500).json({ message: "Error fetching hotels" });
  }
};