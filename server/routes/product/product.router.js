const express = require('express');
const { httpCreateProduct, httpUpdateProduct, httpDeleteProduct, httpGetProduct, 
    httpGetAllProducts, httpUploadProductImages } = require('./product.controller');
const multer = require('multer');


const productRouter = express.Router();


const maxFileSize = 5000 * 1024 * 1024;

const upload = multer({
    limits: { fileSize: maxFileSize },
    storage: multer.memoryStorage(),
});


productRouter.post("/upload", upload.array('file', 7), httpUploadProductImages);
productRouter.post("/", httpCreateProduct);
productRouter.put("/:id", httpUpdateProduct);
productRouter.delete("/:id", httpDeleteProduct);
productRouter.get("/:id", httpGetProduct);
productRouter.get("/", httpGetAllProducts);




module.exports = productRouter;