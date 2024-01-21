const mongoose = require('mongoose');


const invoiceSchema = new mongoose.Schema({
    userName: String,
    yourName: String, 
    companyName: String, 
    address: String, 
    city: String, 
    email: String, 
    phoneNo: Number, 
    accountNo: Number, 
    bankName: String, 
    bankBranch: String, 
    clientName: String, 
    clientEmail: String, 
    clientPhone: Number, 
    clientCompany: String, 
    clientAddress: String, 
    clientCity: String, 
    invoiceNumber: String, 
    invoiceDate: Date, 
    dueDate: Date,
    tax: Number
});

module.exports = mongoose.model("invoices", invoiceSchema);