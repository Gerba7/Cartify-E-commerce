const express = require('express');
const { httpCreateOrder, httpUpdateOrder, httpDeleteOrder, httpGetOrder, httpGetAllOrders } = require('./order.controller');


const orderRouter = express.Router();


orderRouter.post("/", httpCreateOrder);
orderRouter.put("/:id", httpUpdateOrder);
orderRouter.delete("/:id/:acId", httpDeleteOrder);
orderRouter.get("/:id", httpGetOrder);
orderRouter.get("/", httpGetAllOrders);




module.exports = orderRouter;