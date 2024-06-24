const BrandDatabase = require('../../models/brand/brand.model');


async function httpCreateBrand(req, res) {
    
    const newBrand = new BrandDatabase(req.body)

    try {
        const savedBrand = await newBrand.save();
        res.status(201).json(savedBrand);
    } catch (err) {
        res.status(400).json('Error al crear la marca');
    }
}



async function htttpDeleteBrand(req, res) {

        try {
            await BrandDatabase.findByIdAndDelete(req.params.id);
            res.status(200).json("La marca fue eliminada con exito!");
        } catch (err) {
            res.status(400).json("Error al intentar eliminar marca");
        };


};


async function htttpGetBrand(req, res) {

        try {
            const brand = await BrandDatabase.findById(req.params.id);
            res.status(200).json(brand);
        } catch (err) {
            res.status(400).json('Error al cargar marca');
        };

};


async function htttpGetAllBrands(req, res) {

    try {
        const brands = await BrandDatabase.find();
        res.status(200).json(brands)
    } catch (err) {
        res.status(400).json('Error al cargar marcas');
    }
    
};




module.exports = {
    httpCreateBrand,
    htttpDeleteBrand,
    htttpGetBrand,
    htttpGetAllBrands
};

