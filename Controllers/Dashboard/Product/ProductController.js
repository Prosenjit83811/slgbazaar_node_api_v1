const Product = require('../../../Models/ProductModel')
require('../../../Models/ProductVariationModel')
require('../../../Models/ProductAttributeModel')

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

exports.show = (req, res) => {
    
    var id = req.params.id;
   
    try {
        Product.findById(id)
            .find({isDeleted: false})
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
        const product = new Product(req.body);

        await product.save((error, result)=>{
            if(error) {
                console.log(error);
                res.status(500);
                res.send(error);
            }
            else {
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
        Product.findByIdAndUpdate(req.params.id, req.body, function(error, result){
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
        Product.findByIdAndUpdate(req.params.id, {isDeleted:true}, function(error, result){
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