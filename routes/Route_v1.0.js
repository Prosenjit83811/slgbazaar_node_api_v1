const Auth = require('../Api/v1.0/Routes/AuthRoute');
const config = require('../Api/v1.0/Config/App');
const prefix = '/api/'+config.version;

module.exports = function(app){
    app.use(prefix+'/auth', Auth);

}