const jwt = require('jsonwebtoken');
const User = require('../../Models/UserModel')
const dbConfig = require('../../Config/DB');

exports.index = (req, res) => {
    return  res.json("work");
}