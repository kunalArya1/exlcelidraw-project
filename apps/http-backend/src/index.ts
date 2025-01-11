const express = require("express");
const app = express();


app.get("/", (req: any, res: any) => {
  res.send("App is running");
});

app.listen(4000);
