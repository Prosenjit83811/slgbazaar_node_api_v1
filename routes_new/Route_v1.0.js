const Auth = require('../Routes/AuthRoute');
const Profile = require('../Routes/ProfileRoute');
const config = require('../Config/App');
const prefix = '/api/'+config.version;
const passport = require('passport')
const Policy = require('express-policies');
const UserPolicie = require('../Policies/UserPolicy');

require('../Middlewares/PassportMiddleware')(passport);

module.exports = function(app){
    app.use(passport.initialize());
    app.use(passport.session());

    // Routes
    app.use(prefix+'/auth', Auth);
    app.use(prefix+'/profile', [passport.authenticate('jwt', { session: false }),Policy(UserPolicie)], Profile);

}

// http://localhost:3000/api/1.0/auth/login