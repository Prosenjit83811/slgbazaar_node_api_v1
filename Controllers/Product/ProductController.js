// const jwt = require('jsonwebtoken');
const Product = require('../../Models/ProductModel')
// const mongoosePaginate = require('mongoose-paginate-v2');
require('../../Models/ProductVariationModel')
// const dbConfig = require('../../Config/DB');

exports.index = (req, res) => {
    
        const options = {
            page: 1,
            limit: 2,
            populate: {
                path: 'productVariations', 
                match: { isDeleted: false }
            }
        };

        var query   = {
            isDeleted: false 
        };

        Product.paginate(query, options)
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