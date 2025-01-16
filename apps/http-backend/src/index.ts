import express from "express";
const app = express();
import userRouter from "./routes/user.routes";
import dotenv from "dotenv";

app.use(express.json());
dotenv.config({
  path: "../.env",
});

app.use("/user", userRouter);
app.get("/", (req: any, res: any) => {
  res.send("App is running");
});

app.listen(4000, () => {
  console.log("App is runnig on 4000");
});
