const jwt = require('jsonwebtoken');
const Address = require('../../../Models/AddressModel')
const Role = require('../../../Models/RoleModel')
const User = require('../../../Models/UserModel')
const dbConfig = require('../../../Config/DB');


exports.store = async (req, res) => {

    try {

        let body = req.body;
        const address = new Address(body);
        address.user = user._id;
        await address.save((error, result)=>{
            if(error) {
                console.log(error);
                res.status(500);
                res.send(error);
            }
        });
        user.address.push(address._id);
        await user.save((error, result)=>{
            if(error) {
                console.log(error);
                res.status(500);
                res.send(error);
            }
            else {
                id = result._id;
                res.status(200);
                res.json({
                    message: "Successfully Added"
                });
            }
        });

    } catch (error) {
        res.send(500);
    }


}