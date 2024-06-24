const mongoose = require('mongoose');


const ModelSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        unique: true,
    },
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand',
        required: true,
    },
    

}, {timestamps: true}

);

module.exports = mongoose.model("Model", ModelSchema);