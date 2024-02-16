import express,{Request,Response} from "express"

import cors from "cors"

import "dotenv/config"

import mongoose from "mongoose"
import userRoute from "./routes/user";
import authRoute from "./routes/auth";
import cookieParser from "cookie-parser"
import placeRoute from "./routes/my-places";
import { v2 as cloudinary } from "cloudinary";
mongoose.connect(process.env.MONGO as string)


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});



const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/my-places", placeRoute);
app.listen(5000, () => {
  console.log("server connected to MangoDb");
});