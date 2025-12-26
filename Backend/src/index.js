import express from "express";
import userRouter from "./user/user.routes.js";

const app = express();
app.listen(8080, () => {
  console.log("Server running on port 8080");
});

// app level middleware
import morgan from "morgan";
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// route level middleware
app.use("/api/user", userRouter);
