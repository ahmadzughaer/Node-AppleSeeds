const express = require("express");
const rootRouter = express.Router();
const { deleteRoute, getRoute, postRoute, putRoute } = require("../controllers/userController.js");
rootRouter.get("/get", getRoute);
rootRouter.get("/post", postRoute);
rootRouter.get("/put", putRoute);
rootRouter.get("/delete", deleteRoute);

module.exports = rootRouter;