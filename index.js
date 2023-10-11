const express = require("express");
const app = express();
const PORT = 3000;
const userRouter = require("./routes/userRoute");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/test", (req, res) => {
  res.status(200).send("testing api");
});

app.use("/api", userRouter);

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
