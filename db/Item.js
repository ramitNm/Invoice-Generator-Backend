const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    invoiceNumber: String,
    itemName: String,
    itemPrice: Number,
    itemQuantity: Number
});

module.exports = mongoose.model("items", itemSchema);