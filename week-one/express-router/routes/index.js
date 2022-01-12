const express = require("express");
const rootRouter = express.Router();
const { deleteRoute, getRoute, postRoute, putRoute } = require("../controllers/userController.js");
rootRouter.get("/get", getRoute);
rootRouter.post("/post", postRoute);
rootRouter.put("/put", putRoute);
rootRouter.delete("/delete", deleteRoute);

module.exports = rootRouter;