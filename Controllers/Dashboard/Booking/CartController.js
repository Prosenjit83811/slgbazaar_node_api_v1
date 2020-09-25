const Cart = require('../../../Models/CartModel')

exports.index = (req, res) => {
    
    try {
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
                options: { sort: { "name": 1 }},
                select: ['_id','name'],
                path: 'products', 
                match: { isDeleted: false },
            },{
                options: { sort: { "firstname": 1 }},
                select: ['_id','firstname', 'lastname'],
                path: 'user', 
                match: { isDeleted: false },
            }]
        };

        var query   = {
            user: req.user._id
        };

        Cart.paginate(query, options)
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

        var query = {user: req.user._id, $addToSet: { products: req.body.product_id  } },
            conduction = { user: req.user._id },
            options = {safe: true, upsert: true, new: true, runValidators: true};

        await Cart.findOneAndUpdate(conduction, query, options, function(error, result) {
            if(error) {
                console.log(error);
                res.status(500);
                res.send(error);
            }
            else 
            {
                res.status(200);
                res.json({
                    message: "Successfully Added"
                });
            }

        });

    } catch (error) {
        res.status(500);
        res.send(error);
    }

}

exports.delete = async (req, res) => {

    try {
        Cart.findOneAndUpdate({user: req.user._id},{ $pull: { products: req.params.productId } }, function(error, result){
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