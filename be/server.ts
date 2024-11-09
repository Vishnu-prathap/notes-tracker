import express, { Request, Response } from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => res.send("Server up and running!"));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is up and running on http://localhost:${PORT}`);
});
