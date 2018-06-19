module.exports = {
  _getOAuthTokenCallback: function(resolve, reject) {
    return function(err, token, tokenSecret, results){
      if(err) return reject(err);
      resolve([token, tokenSecret, results]);
    };
  },
  _performSecureRequestCallback: function(resolve, reject){
    return function(err, data, res){
      if(err) {
        if(data !== undefined || res !== undefined) {
          var errObj = new Error("Response Error");

          errObj.statusCode = err.statusCode;
          errObj.data = err.data;
          errObj.response = res;

          err = errObj;
        }

        return reject(err);
      }

      resolve([data, res]);
    };
  }
};