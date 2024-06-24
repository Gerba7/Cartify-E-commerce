const express = require('express');
const { httpCreateModel, htttpDeleteModel, htttpGetModel, htttpGetAllModels } = require('./model.controller');


const modelRouter = express.Router();

modelRouter.post("/:brandId", httpCreateModel);
modelRouter.delete("/:id", htttpDeleteModel);
modelRouter.get("/:brandId", htttpGetAllModels);
modelRouter.get("/:id", htttpGetModel);


module.exports = modelRouter;