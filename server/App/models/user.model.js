let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let userSchema = new Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    fullName : {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true
    },
    trackingNo:{
        type: String,
        required: true
    },
    address1: {
        type: String,
        required: true
    },
    address2: {
        type: String,
        required: true
    },
    city:  {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    pincode:{
        type: String,
        required: true
    },
});
let userModel = mongoose.model('Data', userSchema);
module.exports = userModel;