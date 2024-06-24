const express = require('express');
const { httpCreateCategory, htttpDeleteCategory, htttpGetCategory, htttpGetAllCategories } = require('./category.controller');


const categoryRouter = express.Router();

categoryRouter.post("/", httpCreateCategory);
categoryRouter.delete("/:id", htttpDeleteCategory);
categoryRouter.get("/:id", htttpGetCategory);
categoryRouter.get("/", htttpGetAllCategories);


module.exports = categoryRouter;