const JwtStrategy = require('passport-jwt').Strategy,
 ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('.././Models/UserModel');
const dbConfig = require('.././Config/DB');

module.exports = (passport)=>{
    var opts = {}
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('redoc'),
    opts.secretOrKey = dbConfig.secret;

    passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
        User.getUserByID(jwt_payload.data._id, function(err, user) {
            if (err) {
                return done(err, false);
            }
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
                
                // or you could create a new account
            }
        });
    }));
}