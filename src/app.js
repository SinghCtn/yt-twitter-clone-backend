import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// the use function allows us to interact with the middlewares

app.use(
  cors({
    origin: process.env.CROS_ORIGIN,
    credentials: true,
  })
); //configuring the cors

app.use(express.json({ limit: "16kb" })); //configuring the size of json being accepted by the server

app.use(express.urlencoded({ extended: true, limit: "16kb" })); //used to understand the encoded url's like %20 or + in between the url text and extended true allows us to parse objects inside objects

app.use(express.static("public")); // this configuration is allowing us to store the static data (images, pdf, etc.)in the public folder(mostly temporaroly)

app.use(cookieParser()); // this cookie-parser allows us to interact with the cookies that are securely stored on the user's browser

export { app };
