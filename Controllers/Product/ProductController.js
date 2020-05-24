// const jwt = require('jsonwebtoken');
const Product = require('../../Models/ProductModel')
// const mongoosePaginate = require('mongoose-paginate-v2');
require('../../Models/ProductVariationModel')
require('../../Models/ProductAttributeModel')
// require('../../Models/CategoryModel')
// const dbConfig = require('../../Config/DB');

exports.index = (req, res) => {
    
        const options = {
            sort: {"name": -1},
            page: 1,
            limit: 2,
            populate: [{
                select: ['_id','variation'],
                path: 'productVariations', 
                match: { isDeleted: false },
                populate: {
                    options: { sort: { "value": 1 }},
                    select: ['_id','attribute','value'],
                    path: 'productAttributes', 
                    match: { isDeleted: false }
                }
            },{
                options: { sort: { "category": 1 }},
                select: ['_id','category'],
                path: 'categories', 
                match: { isDeleted: false },
            },]
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