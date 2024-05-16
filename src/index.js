// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";

import connnectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
}); //here we are loading the env file in the starting of the project

connnectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("Error: ", error);
      throw error;
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONOG db connection failed !!!", err);
  });

/*
import express from "express";
const app = express()(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Error: ", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listening on ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
})();*/
