import express from "express";
import userRouter from "./user/user.routes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.listen(8080, () => {
  console.log("Server running on port 8080");
});

//DB Connection
import mongoose from "mongoose";
mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("Database Connected"))
  .catch(() => console.log("Database not Connected"));

// app level middleware
import morgan from "morgan";
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// route level middleware
app.use("/api/user", userRouter);
