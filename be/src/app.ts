require("dotenv").config();
import express, { Request, Response } from "express";
// import { connect } from "http2";

import { connectDB } from "./config/db";
import { userRoutes } from "./routes/userRoute";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Server up and running!");
});
app.use("/api/user", userRoutes);
const PORT = process.env.PORT || 8000;

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server is up and running on https://localhost:${PORT}`);
});
