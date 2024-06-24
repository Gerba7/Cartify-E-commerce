const express = require('express');
const { httpCreateBrand, htttpDeleteBrand, htttpGetBrand, htttpGetAllBrands } = require('./brand.controller');


const brandRouter = express.Router();

brandRouter.post("/", httpCreateBrand);
brandRouter.delete("/:id", htttpDeleteBrand);
brandRouter.get("/:id", htttpGetBrand);
brandRouter.get("/", htttpGetAllBrands);


module.exports = brandRouter;