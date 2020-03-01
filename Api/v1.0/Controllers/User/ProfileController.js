const jwt = require('jsonwebtoken');
const User = require('../../Models/UserModel')
const dbConfig = require('../../Config/DB');

exports.index = (req, res) => {
    console.log(req.user);
    var userId = req.user.id;
   
    try {
        User.findById(userId)
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