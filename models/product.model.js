const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let productschema = new Schema({
    name : {type:String, required: true},
    price : {type:Number, required: true}
})

module.exports = mongoose.model('Product', productschema);