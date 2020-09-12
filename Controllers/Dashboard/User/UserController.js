const jwt = require('jsonwebtoken');
const User = require('../../../Models/UserModel')
const Role = require('../../../Models/RoleModel')
const dbConfig = require('../../../Config/DB');
const bcrypt = require('bcryptjs');

exports.index = (req, res) => {
    
    const options = {
        sort: {"name": -1},
        page: 1,
        limit: 2,
        populate: {
            select: ['_id','role'],
            path: 'role' 
        }
    };

    var query   = {
        isDeleted: false 
    };

    User.paginate(query, options)
        .then(result => {
            if(result){
                res.status(200).json({
                    data: result
                });
            }else{
                res.status(404).json({
                    message: "Not found any record"
                });
            }
            
        })
        .catch(error => {
            res.status(500).json({
                error: error
            });
        });

}

exports.show = (req, res) => {
    
    var userId = req.user.id;
   
    try {
        User.findById(userId)
            .populate("role")
            .populate("address")
            .exec()
            .then(result => {
                if(result){
                    res.status(200).json({
                        data: result
                    });
                }else{
                    res.status(404).json({
                        message: "Not found any record"
                    });
                }
                
            })
            .catch(error => {
                res.status(500).json({
                    error: error
                });
            });
    
    } catch (error) {
        res.send(500);
    }

}


exports.store = async (req, res) => {

    try {
        let id = "";
        req.body.password = bcrypt.hashSync(req.body.password);
        console.log("body",req.body);
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

    } catch (error) {
        res.send(500);
    }


}

exports.update = async (req, res) => {

    try {
        User.findByIdAndUpdate(req.params.userId, req.body, function(error, result){
            console.log(req.params.userId);
            console.log(req.body);
            if(error) {
                res.status(500);
                res.send(error);
            }
            else {
                res.status(200);
                res.json({
                    message: "Successfully Updated"
                });
            }
        });

    } catch (error) {
        res.send(500);
    }

}

exports.delete = async (req, res) => {

    try {
        User.findByIdAndUpdate(req.params.userId, {}, function(error, result){
            if(error) {
                res.status(500);
                res.send(error);
            }
            else {
                res.status(200);
                res.json({
                    message: "Successfully Updated"
                });
            }
        });

    } catch (error) {
        res.send(500);
    }

}