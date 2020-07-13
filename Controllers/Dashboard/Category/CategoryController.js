// const jwt = require('jsonwebtoken');
const Category = require('../../../Models/CategoryModel')
// const mongoosePaginate = require('mongoose-paginate-v2');
// const Role = require('../../Models/RoleModel')
// const dbConfig = require('../../Config/DB');

exports.index = (req, res) => {
    
    try {
        const options = {
            page: 1,
            limit: 2,
            populate: {
                path: 'sub_categories', 
                match: { isDeleted: false }
            }
        };

        var query   = {
            isDeleted: false 
        };

        Category.paginate(query, options)
        // .populate("sub_categories")
            // .exec()
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