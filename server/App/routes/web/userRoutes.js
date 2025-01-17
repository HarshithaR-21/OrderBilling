let express = require('express');
const userModel = require('../../models/user.model');

let userRouter = express.Router();

userRouter.post('/insert', (req, res) =>{
    let {firstName, lastName,fullName, email, status,trackingNo, address1, address2, city, state, country, pincode} = req.body;
    let newData = new userModel({
        firstName,
        lastName,
        fullName,
        email,
        status,
        trackingNo,
        address1,
        address2,
        city,
        state,
        country,
        pincode
    });
    newData.save().then( ()=>{
        res.send({
            status: 1,
            message: "User data saved Successfully"
        })
    }).catch((err) => res.send(err))
})

module.exports = userRouter;