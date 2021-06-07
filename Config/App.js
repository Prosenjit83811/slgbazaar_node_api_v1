module.exports = {
    version : '1.0'
};

global.ucwords = function(str) {
    let PATTERN = /^(.)|\s+(.)/g;
    return (str + '').replace(PATTERN, function(match) {
      return match.toUpperCase();
    });
}

global.ucfirst = function(str) {
    return str.charAt(0).toUpperCase() + s.substr(1);
};