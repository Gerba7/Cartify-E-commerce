const ProductDatabase = require('../../models/product/product.model');
const { s3 } = require('../../services/aws');
const { PutObjectCommand } = require('@aws-sdk/client-s3');
const { DeleteObjectsCommand } = require('@aws-sdk/client-s3');
const { default: mongoose } = require('mongoose');
const { v4: uuidv4 } = require('uuid');



async function httpCreateProduct(req, res) {

    const product = req.body;
    
    const newProduct = new ProductDatabase(product);
    
    try {

        const savedProduct = await newProduct.save();

        res.status(201).json(savedProduct);

    } catch (err) {
        res.status(400).json("Error creating new product.");
        console.log(err)
    }
};




async function httpUpdateProduct(req, res) {

    let product;

    if (req.body.img && req.body.img.length > 0) {

        product = await ProductDatabase.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
    }

    const indexesToUpdate = req.body.newFilesIndex;

    const newImgUrls = req.body.img;

    const imgUpdateObject = {};
    
    indexesToUpdate?.forEach((index, i) => {
        imgUpdateObject[`img.${index}`] = newImgUrls[i];
    });

    const otherFieldsUpdateObject = {
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        size: req.body.size,
        color: req.body.color,
        price: req.body.price,
        inStock: req.body.inStock,
        discount: req.body.discount,
        discountAmount: req.body.discountAmount,
        weight: req.body.weight,
        stock: req.body.stock,
        brand: req.body.brand,
        model: req.body.model,
        transmission: req.body.transmission,
        condition: req.body.condition,
        location: req.body.location,
        type: req.body.type,
        year: req.body.year,
        mileage: req.body.mileage,
    };

    const filteredOtherFieldsUpdateObject = Object.fromEntries(
        Object.entries(otherFieldsUpdateObject).filter(([_, value]) => value !== undefined && value !== '')
    );

    const updateObject = { ...imgUpdateObject, ...filteredOtherFieldsUpdateObject };
    
    try {

        const updatedProduct = await ProductDatabase.findByIdAndUpdate(req.params.id, {
            $set: updateObject
        }, {new: true})
        
        if (newImgUrls && newImgUrls.length > 0) {

            const objectsToDelete = []; 
        
            indexesToUpdate?.forEach(index => {
                if(product.img[index]) {
                    objectsToDelete.push({ Key: product.img[index] })
                }
            });
            
            const deleteParams = {
                Bucket: 'ecommgl7',
                Delete: {
                    Objects: objectsToDelete
                }
            };

            const res = await s3.send(new DeleteObjectsCommand(deleteParams));  // Check if deleeted from bucket

            console.log(res)
        }
        
        res.status(200).json(updatedProduct)
    } catch (err) {
        console.log(err);
        res.status(400).json("Error updating the product");
    }

};



async function httpDeleteProduct(req, res) {

    const product = await ProductDatabase.findById(req.params.id);

    if (!product) {
        return res.status(404).json({ error: 'Product not found' });
    }

    try {

        await ProductDatabase.findByIdAndDelete(req.params.id);

        const imageKeys = product.img;

        if (imageKeys && imageKeys.length > 0) {
            const objectsToDelete = imageKeys.map(key => ({ Key: key }));

            const deleteParams = {
                Bucket: 'ecommgl7',
                Delete: {
                    Objects: objectsToDelete
                }
            };

            await s3.send(new DeleteObjectsCommand(deleteParams));
        }

        res.status(200).json("The product has been deleted successfully!");

    } catch (err) {
        res.status(400).json(`Error deleting the product: ${err}`);
    };

};




async function httpGetProduct(req, res) {

    try {
        const product = await ProductDatabase.findById(req.params.id)
        .populate('brand', 'name')
        .populate('model', 'name')
        .populate('category', 'name');

        res.status(200).json(product);
        
    } catch (err) {
        res.status(400).json("Error getting the product");
    };

};



async function httpGetAllProducts(req, res) {

    const qNew = req.query.new;

    const qCategory = req.query.category ? req.query.category.split(',') : null;

    const qSearchClient = req.query.search;

    const qSearchAdmin = req.query.searchAdm;
    
    const qInStock = req.query.inStock;

    const qLimit = req.query.limit || 8 ;

    const qPage = req.query.page || 1;
    
    const qSkip = (qPage -1) * qLimit;

    const qSort = req.query.sort;

    const qFilter = req.query.filter === 'All' ? false : req.query.filter;

    const qBrand = req.query.brand ? req.query.brand.split(',') : null;

    const qModel = req.query.model ? req.query.model.split(',') : null;

    const qCondition = req.query.condition;

    const qMinPrice = req.query.minPrice;

    const qMaxPrice = req.query.maxPrice;

    const qMinMileage = req.query.minMileage;

    const qMaxMileage = req.query.maxMileage;

    const qMinYear = req.query.minYear;

    const qMaxYear = req.query.maxYear;

    
    
    
    let sort;

    switch (qSort) {
        case 'Price (lowest first)':
            sort = { price: 1 };
            break;
        case 'Price (highest first)':
            sort = { price: -1 };
            break;
        case 'Z-A':
            sort = { name: -1 };
            break;
        case 'A-Z':
            sort = { name: 1 };
            break;
        case 'Newest':
        default:
            sort = { createdAt: -1 };
            break;
    }

    try {

        const query = {};

        if (qInStock) {
            query.inStock = true;
        }

        if (qNew) {
            query.inStock = true;
        }
        
        if (qCategory) {
            query.category = { $in: qCategory };
        }

        if (qFilter) {
            query.category = { $in: [qFilter] };
        }

        if (qSearchClient) {
            query.title = { $regex: qSearchClient, $options: 'i' };
        }

        if (qSearchAdmin) {
            query.name = { $regex: qSearchAdmin, $options: 'i' };
        }

        if (qBrand) {
            query.brand = { $in: qBrand };
        }

        if (qModel) {
            query.model = { $in: qModel };
        }

        if (qCondition) {
            query.condition = qCondition;
        }

        if (qMinPrice && qMaxPrice) {
            query.price = { $gte: qMinPrice, $lte: qMaxPrice };
        } else if (qMinPrice) {
            query.price = { $gte: qMinPrice };
        } else if (qMaxPrice) {
            query.price = { $lte: qMaxPrice };
        }

        if (qMinMileage && qMaxMileage) {
            query.mileage = { $gte: qMinMileage, $lte: qMaxMileage };
        } else if (qMinMileage) {
            query.mileage = { $gte: qMinMileage };
        } else if (qMaxMileage) {
            query.mileage = { $lte: qMaxMileage };
        }

        if (qMinYear && qMaxYear) {
            query.year = { $gte: qMinYear, $lte: qMaxYear };
        } else if (qMinYear) {
            query.year = { $gte: qMinYear };
        } else if (qMaxYear) {
            query.year = { $lte: qMaxYear };
        }


        try{
            const products = await ProductDatabase.find(query)
                .sort(sort)
                .skip(qSkip)
                .limit(qLimit)
                .populate('brand', 'name')
                .populate('model', 'name')
                .populate('category', 'name');

            const count = await ProductDatabase.countDocuments(query);
            const pagesNumber = Math.ceil(count / qLimit);
            

            res.status(200).json({products, count, pagesNumber});
        } catch(err) {
            console.log(err)
        }
        

    } catch (err) {
        res.status(400).json("Error getting the products");
    };

};



async function httpUploadProductImages(req, res) {

    try {
        
        const imageFiles = req.files;
        
        if (!imageFiles || imageFiles.length === 0) {
            return res.status(400).json({ error: 'No Image files provided.' });
        }

        const uploadedImageKeys = [];

        
        for (const file of imageFiles) {
      
            try {

                const imageKey = `${uuidv4()}.${file.originalname.split('.').pop()}`;

                const uploadParams = {
                    Bucket: 'ecommgl7',
                    Key: imageKey,
                    Body: file.buffer,
                    ContentType: file.mimetype,
                };
              
                const uploadCommand = new PutObjectCommand(uploadParams);
              
                await s3.send(uploadCommand);
                
                const publicUrl = `https://ecommgl7.s3.amazonaws.com/${uploadParams.Key}`;

                uploadedImageKeys.push(publicUrl);

            } catch (err) {
                
                console.log('error:', err)
        
            }

        }

        return res.status(200).json(uploadedImageKeys)
            

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while uploading the images' });
    }
    
};




module.exports = {
    httpCreateProduct,
    httpUpdateProduct,
    httpDeleteProduct,
    httpGetProduct,
    httpGetAllProducts,
    httpUploadProductImages
}






// let sort;

//     if (qSort === 'Price (lowest first)') {
//         sort = {price: 1}
//     } else if (qSort === 'Price (highest first)') {
//         sort = {price: -1}
//     } else if (qSort === 'Z-A') {
//         sort = {name: -1}
//     } else if (qSort === 'A-Z') {
//         sort = {name: 1}
//     } else if (qSort === 'Newest') {
//         sort = {createdAt: -1}
//     } else {
//         sort = {createdAt: -1}
//     }

    
//     try {

//         let products;
//         let count;
//         let pagesNumber;

//         if (qNew) {
//             products = await ProductDatabase.find({
//                 inStock: true,
//             })
//             .sort(sort)
//             .limit(4)
//             .populate('brand', 'name')
//             .populate('model', 'name')
//             .populate('category', 'name');
//             count = await ProductDatabase.count({
//                 inStock: true,
//             })
//             pagesNumber = Math.ceil(count / qLimit)
//         } else if (qCategory) {
//             products = await ProductDatabase.find({
//                 inStock: true,
//                 categories: {
//                     $in: [qCategory],
//                 }
//             })
//             .sort(sort)
//             .skip(qSkip)
//             .limit(qLimit)
//             .populate('brand', 'name')
//             .populate('model', 'name')
//             .populate('category', 'name');
//             count = await ProductDatabase.count({
//                 inStock: true,
//                 categories: {
//                     $in: [qCategory],
//                 }
//             })
//             pagesNumber = Math.ceil(count / qLimit)
//         } else if (qFilter) {
//             products = await ProductDatabase.find({
//                 category: {
//                     $in: [qFilter],
//                 }
//             })
//             .sort(sort)
//             .skip(qSkip)
//             .limit(qLimit)
//             .populate('brand', 'name')
//             .populate('model', 'name')
//             .populate('category', 'name');
//             count = await ProductDatabase.countDocuments({
//                 category: {
//                     $in: [qFilter],
//                 }
//             })
//             pagesNumber = Math.ceil(count / qLimit)
//         } else if (qSearchClient) {
//                 products = await ProductDatabase.find({
//                     inStock: true,
//                     title: {$regex: qSearch, $options: 'i' },
//                 }).limit(10)
//                 .populate('brand', 'name')
//                 .populate('model', 'name')
//                 .populate('category', 'name');
//                 count = await ProductDatabase.countDocuments({
//                     name: {$regex: qSearchAdmin, $options: 'i' },
//                 })
//                 pagesNumber = Math.ceil(count / qLimit);
//         } else if (qSearchAdmin) {
//             products = await ProductDatabase.find({
//                 name: {$regex: qSearchAdmin, $options: 'i' },
//             })
//             .sort(sort)
//             .skip(qSkip)
//             .limit(qLimit)
//             .populate('brand', 'name')
//             .populate('model', 'name')
//             .populate('category', 'name');
//             ;
//             count = await ProductDatabase.countDocuments({
//                 name: {$regex: qSearchAdmin, $options: 'i' },
//             })
//             pagesNumber = Math.ceil(count / qLimit)
//         } else if (qInStock) {
//             products = await ProductDatabase.find({
//                 inStock: true,
//             })
//             .sort(sort)
//             .skip(qSkip)
//             .limit(qLimit)
//             .populate('brand', 'name')
//             .populate('model', 'name')
//             .populate('category', 'name');
//             count = await ProductDatabase.count({
//                 inStock: true,
//             })
//             pagesNumber = Math.ceil(count / qLimit) 
//         } else {
//             products = await ProductDatabase.find()
//             .sort(sort)
//             .skip(qSkip)
//             .limit(qLimit)
//             .populate('brand', 'name')
//             .populate('model', 'name')
//             .populate('category', 'name');
//             count = await ProductDatabase.countDocuments()
//             pagesNumber = Math.ceil(count / qLimit)
//         };