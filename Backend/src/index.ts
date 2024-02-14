import express,{Request,Response} from "express"

import cors from "cors"

import "dotenv/config"

import mongoose from "mongoose"
import userRoute from "./routes/user";
import authRoute from "./routes/auth";

mongoose.connect(process.env.MONGO as string)


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.listen(5000, () => {
  console.log("server connected to MangoDb");
});