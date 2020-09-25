const User = require('../../../Models/UserModel')
const bcrypt = require('bcryptjs');

exports.index = (req, res) => {
    
    let sortKey = req.query.sort_by;
    let sort = {};
    if(req.query.sort == 'asc'){
        sort[sortKey] = 1;
    }else{
        sort[sortKey] = -1;
    }

    const options = {
        sort: sort,
        page: req.query.page,
        limit: req.query.limit,
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
    
    var userId = req.params.userId;
   
    try {
        User.findById(userId)
            .find({isDeleted: false})
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
        User.findByIdAndUpdate(req.params.userId, {isDeleted:true}, function(error, result){
            if(error) {
                res.status(500);
                res.send(error);
            }
            else {
                res.status(200);
                res.json({
                    message: "Successfully Deleted"
                });
            }
        });

    } catch (error) {
        res.send(500);
    }

}