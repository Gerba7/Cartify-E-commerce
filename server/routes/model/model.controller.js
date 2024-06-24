const ModelDatabase = require('../../models/model/model.model');
const mongoose = require('mongoose');



async function httpCreateModel(req, res) {

    const brandId = req.params.brandId;
    console.log(brandId)
    const newModel = new ModelDatabase({
        name: req.body.name,
        brand: brandId
    })

    try {
        const savedModel = await newModel.save();
        res.status(201).json(savedModel);
    } catch (err) {
        res.status(400).json('Error al crear el modelo');
    }
}



async function htttpDeleteModel(req, res) {

        try {
            await ModelDatabase.findByIdAndDelete(req.params.id);
            res.status(200).json("El modelo fue eliminada con exito!");
        } catch (err) {
            res.status(400).json("Error al intentar eliminar el modelo");
        };


};


async function htttpGetModel(req, res) {

        try {
            const model = await ModelDatabase.findById(req.params.id);
            res.status(200).json(model);
        } catch (err) {
            res.status(400).json('Error al cargar modelo');
        };

};


async function htttpGetAllModels(req, res) {

    const brandId = req.params.brandId;
    
    try {
        const models = await ModelDatabase.find({ brand: brandId });
        
        res.status(200).json(models);
    } catch (err) {
        res.status(400).json({ message: 'Error al cargar modelos', error: err });
    }
    
};




module.exports = {
    httpCreateModel,
    htttpDeleteModel,
    htttpGetModel,
    htttpGetAllModels
};

