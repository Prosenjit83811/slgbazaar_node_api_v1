const Auth = require('./AuthRoute');
const Profile = require('./ProfileRoute');
const User = require('./UserRoute');
const Category = require('./CategoryRoute');
const Product = require('./ProductRoute');
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
    app.use(prefix+'/users', [passport.authenticate('jwt', { session: false })], User);
    app.use(prefix+'/category', [passport.authenticate('jwt', { session: false }),Policy(UserPolicie)], Category);
    app.use(prefix+'/products', [passport.authenticate('jwt', { session: false }),Policy(UserPolicie)], Product);
    
}
