const express = require("express");
const { deleteRoute, getRoute, postRoute, putRoute } = require("../controllers/userController.js");
const userRouter = express.Router();

userRouter.get("/", getRoute);
userRouter.post("/", postRoute);
userRouter.put("/", putRoute);
userRouter.delete("/", deleteRoute);

module.exports = userRouter;