var Promise = require("bluebird");
var nativeOAuth = require("./native-oauth.js");

var _getOAuthTokenCallback = function(resolve, reject) {
  return function(err, token, tokenSecret, results){
    if(err) return reject(err);
    resolve([token, tokenSecret, results]);
  };
};

var _performSecureRequestCallback = function(resolve, reject){
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
};

nativeOAuth.prototype.getOAuthAccessTokenAsnyc = function(oauth_token, oauth_token_secret, oauth_verifier) {
  var _this = this;
  return new Promise(function(resolve, reject){
    _this.getOAuthAccessToken(oauth_token, oauth_token_secret, oauth_verifier, _getOAuthTokenCallback(resolve, reject));
  });
};

nativeOAuth.prototype.getProtectedResourceAsync = function(url, method, oauth_token, oauth_token_secret) {
  var _this = this;

  console.warn("getProtectedResource and getProtectedResourceAsync is deprecated.");

  return new Promise(function(resolve, reject){
    _this.getProtectedResource(url, method, oauth_token, oauth_token_secret, _performSecureRequestCallback(resolve, reject));
  });
};

nativeOAuth.prototype.deleteAsync = function(url, oauth_token, oauth_token_secret) {
  var _this = this;
  return new Promise(function(resolve, reject){
    _this.delete(url, oauth_token, oauth_token_secret, _performSecureRequestCallback(resolve, reject));
  });
};

nativeOAuth.prototype.putAsync = function(url, oauth_token, oauth_token_secret, post_body, post_content_type) {
  var _this = this;
  return new Promise(function(resolve, reject){
    _this.put(url, oauth_token, oauth_token_secret, post_body, post_content_type _performSecureRequestCallback(resolve, reject));
  });
};

nativeOAuth.prototype.postAsync = function(url, oauth_token, oauth_token_secret, post_body, post_content_type) {
  var _this = this;
  return new Promise(function(resolve, reject){
    _this.post(url, oauth_token, oauth_token_secret, post_body, post_content_type, _performSecureRequestCallback(resolve, reject));
  });
};

nativeOAuth.prototype.getOAuthRequestTokenAsync = function(extraParams) {
  var _this = this;
  return new Promise(function(resolve, reject){
    _this.getOAuthRequestToken(extraParams, _getOAuthTokenCallback(resolve, reject));
  });
};

Object
  .keys(nativeOAuth)
  .forEach((k) => {
    exports[k] = nativeOAuth[k];
  });
