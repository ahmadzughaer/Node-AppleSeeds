const express = require("express");
const { deleteRoute, getRoute, postRoute, putRoute } = require("../controllers/userController.js");
const userRouter = express.Router();

userRouter.get("/", getRoute);
userRouter.get("/", postRoute);
userRouter.get("/", putRoute);
userRouter.get("/", deleteRoute);

module.exports = userRouter;