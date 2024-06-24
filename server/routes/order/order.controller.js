const OrderDatabase = require('../../models/order/order.model');



async function httpCreateOrder(req, res) {
    
    const newOrder = new OrderDatabase(req.body);

    try {

        const savedRoom = await newOrder.save();

        res.status(201).json(savedRoom);

    } catch (err) {
        res.status(400).json("Error creating new order.");
        console.log(err)
    }
};




async function httpUpdateOrder(req, res) {
    
    try {
        const updatedOrder = await OrderDatabase.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true})
        res.status(200).json(updatedOrder)
    } catch (err) {
        console.log(err);
        res.status(400).json("Error updating the order");
    }

};



async function httpDeleteOrder(req, res) {

    try {

        await OrderDatabase.findByIdAndDelete(req.params.id);

        res.status(200).json("The order has been deleted successfully!");

    } catch (err) {
        res.status(400).json("Error deleting the order");
    };

};




async function httpGetOrder(req, res) {

    try {
        const order = await OrderDatabase.findById(req.params.id);
        res.status(200).json(order);
    } catch (err) {
        res.status(400).json("Error getting the room");
    };

};



async function httpGetAllOrders(req, res) {

    const qNew = req.query.new;

    const qCategory = req.query.category;

    const qSearch = req.query.search;

    const qInStock = req.query.instock;

    const qLimit = req.query.limit || 2 ;

    const qPage = req.query.page || 1;

    const qSkip = (qPage -1) * qLimit;

    const qSort = req.query.sort;

    const qFilter = req.query.filter === 'all' ? false : req.query.filter;
    
    let sort;

    if (qSort === 'Price (lowest first)') {
        sort = {amount: 1}
    } else if (qSort === 'Price (highest first)') {
        sort = {amount: -1}
    } else if (qSort === 'Client (Z-A)') {
        sort = {name: -1}
    } else if (qSort === 'Client (A-Z)') {
        sort = {name: 1}
    } else if (qSort === 'Newest') {
        sort = {createdAt: -1}
    } else {
        sort = {createdAt: -1}
    }

    
    try {

        let orders;
        let count;
        let pagesNumber;

        if (qNew) {
            orders = await OrderDatabase.find({
                inStock: true,
            })
            .sort(sort)
            .limit(4);
            count = await OrderDatabase.count({
                inStock: true,
            })
            pagesNumber = Math.ceil(count / qLimit)
        } else if (qCategory) {
            orders = await OrderDatabase.find({
                inStock: true,
                categories: {
                    $in: [qCategory],
                }
            })
            .sort(sort)
            .skip(qSkip)
            .limit(qLimit);
            count = await OrderDatabase.count({
                inStock: true,
                categories: {
                    $in: [qCategory],
                }
            })
            pagesNumber = Math.ceil(count / qLimit)
        } else if (qFilter) {
            orders = await OrderDatabase.find({
                $or: [
                    { status: { $in: [qFilter] } },
                    { paymentMethod: { $in: [qFilter] } }
                ]
            })
            .sort(sort)
            .skip(qSkip)
            .limit(qLimit);
            count = await OrderDatabase.countDocuments({
                $or: [
                    { status: { $in: [qFilter] } },
                    { paymentMethod: { $in: [qFilter] } }
                ]
            })
            pagesNumber = Math.ceil(count / qLimit)
        } else if (qSearch) {
            orders = await OrderDatabase.find({
                $or: [
                    {name: {$regex: qSearch, $options: 'i' }},
                    {surname: {$regex: qSearch, $options: 'i' }},
                ]
            })
            .sort(sort)
            .skip(qSkip)
            .limit(qLimit);
            count = await OrderDatabase.countDocuments({
                $or: [
                    {name: {$regex: qSearch, $options: 'i' }},
                    {surname: {$regex: qSearch, $options: 'i' }},
                ]
            })
            pagesNumber = Math.ceil(count / qLimit)
        } else if (qInStock) {
            orders = await OrderDatabase.find({
                inStock: true,
            })
            .sort(sort)
            .skip(qSkip)
            .limit(qLimit)
            count = await OrderDatabase.count({
                inStock: true,
            })
            pagesNumber = Math.ceil(count / qLimit) 
        } else {
            orders = await OrderDatabase.find()
            .sort(sort)
            .skip(qSkip)
            .limit(qLimit)
            count = await OrderDatabase.countDocuments()
            pagesNumber = Math.ceil(count / qLimit)
        };
 
        

        res.status(200).json({orders, count, pagesNumber});

    } catch (err) {
        res.status(400).json("Error getting the orders");
    };

};




module.exports = {
    httpCreateOrder,
    httpUpdateOrder,
    httpDeleteOrder,
    httpGetOrder,
    httpGetAllOrders
}
