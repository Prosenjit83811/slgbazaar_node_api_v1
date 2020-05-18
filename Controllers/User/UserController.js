const jwt = require('jsonwebtoken');
const User = require('../../Models/UserModel')
const Role = require('../../Models/RoleModel')
const dbConfig = require('../../Config/DB');


exports.store = async (req, res) => {

    try {
        let id = "";
        const user = new User(req.body);
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

        // const user = new User(req.body);
        // await user.save((error, result)=>{
        //     if(error) {
        //         console.log(error);
        //         res.status(500);
        //         res.send(error);
        //     }
        //     else {
        //         id = result._id;
        //         res.status(200);
        //         res.json({
        //             message: "Successfully Added"
        //         });
        //     }
        // });

    } catch (error) {
        res.send(500);
    }


}