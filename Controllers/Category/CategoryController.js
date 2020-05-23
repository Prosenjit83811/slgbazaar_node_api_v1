// const jwt = require('jsonwebtoken');
const Category = require('../../Models/CategoryModel')
// const Role = require('../../Models/RoleModel')
// const dbConfig = require('../../Config/DB');

exports.index = (req, res) => {
    
    try {
        Category.find().populate("sub_categories")
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