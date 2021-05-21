const jwt = require('jsonwebtoken');
const User = require('../../../Models/UserModel')
const dbConfig = require('../../../Config/DB');

exports.login = (req, res) => {
    const mobileNumber = req.body.mobileNumber;
    const password = req.body.password;
    console.log(mobileNumber);

    User.findUserByMobileNumber(mobileNumber).then(user => {
        console.log(user);

        if(!user){
            return Promise.reject('This Phone Number Not Found');
        }
        res.status(200).json({
            data: 'Valied user'
        });


    });

}

exports.completeLogin = (req, res) => {
    const mobileNumber = req.body.mobileNumber;
    const password = req.body.password;
    console.log(mobileNumber);

    User.findUserByMobileNumber(mobileNumber).then(user => {
        console.log(user);

        if(!user){
            return Promise.reject('This phone Number Not Found');
        }


        User.comparePassword(password, user.password, (error, isMatch)=>{
            if (error) throw error;
            if(!isMatch){
                return  res.json({"Message":"Wrong password"});
            }else{
                const token = jwt.sign({
                    type: "user",
                    data: {
                        _id: user._id,
                        mobileNumber: user.mobileNumber
                    }
                },dbConfig.secret, {
                    expiresIn: 604800
                }
                );
                return  res.json({"token":token});
            }
        });

    });

}
