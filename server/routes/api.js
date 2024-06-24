const express = require('express');
const authRouter = require('./auth/auth.router');
const usersRouter = require('./user/users.router');
const orderRouter = require('./order/order.router');
const productRouter = require('./product/product.router');
const categoryRouter = require('./category/category.router');
const modelRouter = require('./model/model.router');
const brandRouter = require('./brand/brand.router');
const commentsRouter = require('./comments/comments.router');


const api = express.Router();

api.use('/auth', authRouter);
api.use('/orders', orderRouter);
api.use('/users', usersRouter);
api.use('/products', productRouter);
api.use('/categories', categoryRouter);
api.use('/models', modelRouter);
api.use('/brands', brandRouter);
api.use('/comments', commentsRouter);


module.exports = api;