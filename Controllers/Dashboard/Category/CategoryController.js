const Category = require('../../../Models/CategoryModel')

exports.index = (req, res) => {
    
    // try {
    //     let sortKey = req.query.sort_by;
    //     let sort = {};
    //     if(req.query.sort == 'asc'){
    //         sort[sortKey] = 1;
    //     }else{
    //         sort[sortKey] = -1;
    //     }
    //     const options = {
    //         sort: sort,
    //         page: req.query.page,
    //         limit: req.query.limit,
    //         populate: {
    //             path: 'sub_categories', 
    //             match: { isDeleted: false }
    //         }
    //     };

    //     var query   = {
    //         isDeleted: false 
    //     };

    //     Category.paginate(query, options)
    //         .then(result => {
    //             if(result){
    //                 res.status(200).json({
    //                     data: result
    //                 });
    //             }else{
    //                 res.status(404).json({
    //                     message: "Not found any record"
    //                 });
    //             }
                
    //         })
    //         .catch(error => {
    //             res.status(500).json({
    //                 error: error
    //             });
    //         });
    
    // } catch (error) {
    //     res.send(500);
    // }

    // Category.updateMany( {}, { $rename: { 'category': 'sdsdf' } }, {multi: true} )


    // Category.aggregate([
    //     { $project:
    //         {
    //             name: '$category',
    //             isDeleted: '$isDeleted',
    //         }
    // },
    // { "$match": { "isDeleted": false } },
    //   ], function(err, contacts) {
    //     console.log('contacts', contacts)
    //     contacts.populate(result, {path: "sub_categories"}, callback);
    //   });

    try {
        Category
            .find({isDeleted: false})
            .select({name: '$category'})
            .populate({
                path: 'sub_categories',
                match: { isDeleted: false },
                select: {name: '$category'}
            })
            // .aggregate([
            //     { $project:
            //             {
            //                 name: '$category',
            //                 isDeleted: '$isDeleted',
            //             }
            //     },
            //     { "$match": { "isDeleted": false } },
            // ])
            .exec()
            .then(result => {
                if(result){
                    res.status(200).json(
                        result
                    );
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

exports.show = (req, res) => {
    
    var id = req.params.id;
   
    try {
        Category.findById(id)
            .find({isDeleted: false})
            .populate({
                path: 'sub_categories',
                match: { isDeleted: false }
            })
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
        const user = new Category(req.body);

        await user.save((error, result)=>{
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
        res.send(500);
    }


}

exports.update = async (req, res) => {

    try {
        Category.findByIdAndUpdate(req.params.id, req.body, function(error, result){
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
        Category.findByIdAndUpdate(req.params.id, {isDeleted:true}, function(error, result){
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