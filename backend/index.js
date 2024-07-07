import express from "express";
import { PORT, mongodbUrl } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookmodel.js";
import bookRoutes from "./Routes/bookRoutes.js";
import cors from "cors";

const app = express();

//middlware for parsing req body
app.use(express.json());

// 3 ways to use cors policy
//1.use default syntax of cors(*)
app.use(cors());
// app.listen(PORT, () => {
//   console.log(`the app is at ${PORT}`);
// });
// //2.allow custom origins
// app.use(
//   cors({
//     origin: "http://localhost:5173/",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["content-type"],
//   })
// );

app.get("/", (req, res) => {
  console.log(req);
  return res.send("welcome to 1st intermediate proj");
});

app.use("/books", bookRoutes);

mongoose
  .connect(mongodbUrl)
  .then(() => {
    console.log("database connected successfully");
    app.listen(PORT, () => {
      console.log(`the app is at ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
