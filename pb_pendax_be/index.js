import express from "express";
import { mainRouter } from "./routers/main.router.js";
import cors from "cors";

const app = express(); // creating object and calling class from express

const corsOptions = {
  origin: ["http://localhost:3000"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions)); // Enable CORS for all routes

app.use(express.json()); // telling use json
app.use("/main", mainRouter); // separating main to diferent routers?

const port = 3333;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
