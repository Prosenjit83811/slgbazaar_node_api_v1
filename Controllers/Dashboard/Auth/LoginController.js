const jwt = require('jsonwebtoken');
const User = require('../../../Models/UserModel')
const dbConfig = require('../../../Config/DB');

exports.login = (req, res) => {
    const number = req.body.number;
    const password = req.body.password;
    console.log(number);

    User.findUserByNumber(number).then(user => {
        console.log(user);

        if(!user){
            return Promise.reject('This Number Not Found');
        }
        res.status(200).json({
            data: 'Valied user'
        });


    });

}

exports.completeLogin = (req, res) => {
    const number = req.body.number;
    const password = req.body.password;
    console.log(number);

    User.findUserByNumber(number).then(user => {
        console.log(user);

        if(!user){
            return Promise.reject('This Number Not Found');
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
                        number: user.number
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
