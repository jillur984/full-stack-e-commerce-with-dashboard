import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbConnect from "./config/mongoDB.js";
import userRouter from "./routes/userRouter.js";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
dbConnect();

const port = process.env.PORT || 9000;

app.use("/api/user", userRouter);

app.listen(port, () => {
  console.log(`server is running at Port ${port}`);
});
