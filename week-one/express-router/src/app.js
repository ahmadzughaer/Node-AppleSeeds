const express = require("express");
const cors = require("cors");
require("dotenv").config();
const rootRouter = require("../routes");
const path = require("path");



const { env } = process;
const { PORT } = env;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/numbers", rootRouter);


app.listen(PORT, () => console.log(`Server is up and running on ${PORT}`));