const jwt = require('jsonwebtoken');
const User = require('../../Models/UserModel')
const Role = require('../../Models/RoleModel')
const dbConfig = require('../../Config/DB');


exports.store = (req, res) => {

    return  res.json({"msg":"Successfully Added"});

}