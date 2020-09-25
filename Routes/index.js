const Auth = require('./AuthRoute');
const Profile = require('./ProfileRoute');
const User = require('./UserRoute');
const Category = require('./CategoryRoute');
const Product = require('./ProductRoute');
const Cart = require('./CartRoute');
const Booking = require('./BookingRoute');
const config = require('../Config/App');
const prefix = '/api/'+config.version;
const passport = require('passport')
// const Policy = require('express-policies');
// const UserPolicie = require('../Policies/UserPolicy');

require('../Middlewares/PassportMiddleware')(passport);

module.exports = function(app){
    app.use(passport.initialize());
    app.use(passport.session());

    // Routes
    app.use(prefix+'/auth', Auth);
    app.use(prefix+'/profile', [passport.authenticate('jwt', { session: false })], Profile);
    app.use(prefix+'/users', [passport.authenticate('jwt', { session: false })], User);
    app.use(prefix+'/category', [passport.authenticate('jwt', { session: false })], Category);
    app.use(prefix+'/products', [passport.authenticate('jwt', { session: false })], Product);
    app.use(prefix+'/cart', [passport.authenticate('jwt', { session: false })], Cart);
    app.use(prefix+'/booking', [passport.authenticate('jwt', { session: false })], Booking);
    
}
