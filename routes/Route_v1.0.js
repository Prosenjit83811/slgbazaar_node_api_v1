const Auth = require('../Api/v1.0/Routes/AuthRoute');
const Profile = require('../Api/v1.0/Routes/ProfileRoute');
const config = require('../Api/v1.0/Config/App');
const prefix = '/api/'+config.version;
const passport = require('passport')
const Policy = require('express-policies');
const UserPolicie = require('../Api/v1.0/Policies/UserPolicy');

require('../Api/v1.0/Middlewares/PassportMiddleware')(passport);

module.exports = function(app){
    app.use(passport.initialize());
    app.use(passport.session());

    // Routes
    app.use(prefix+'/auth', Auth);
    app.use(prefix+'/profile', [passport.authenticate('jwt', { session: false }),Policy(UserPolicie)], Profile);

}