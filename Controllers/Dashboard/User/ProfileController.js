const User = require('../../../Models/UserModel')
const bcrypt = require('bcryptjs');

exports.index = (req, res) => {
    console.log(req.user);
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


exports.changePassword = async (req, res) => {

    try {
        User.findByIdAndUpdate(req.user._id, {'password':bcrypt.hashSync(req.body.password)}, function(error, result){
            if(error) {
                res.status(500);
                res.send(error);
            }
            else {
                res.status(200);
                res.json({
                    message: "Successfully updated your password."
                });
            }
        });

    } catch (error) {
        res.send(500);
    }

}