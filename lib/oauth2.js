var Promise = require("bluebird");
var callbacks = require("./callbacks.js");
var nativeOAuth = require("./native-oauth2.js");

var _getOAuthTokenCallback = callbacks._getOAuthTokenCallback;
var _performSecureRequestCallback = callbacks._performSecureRequestCallback;

nativeOAuth.prototype.getOAuthAccessTokenAsnyc = function(code, params) {
  var _this = this;
  return new Promise(function(resolve, reject){
    _this.getOAuthAccessToken(code, params, _getOAuthTokenCallback(resolve, reject));
  });
};

nativeOAuth.prototype.getProtectedResourceAsync = function(url, access_token) {
  var _this = this;

  console.warn("getProtectedResource and getProtectedResourceAsync is deprecated.");

  return new Promise(function(resolve, reject){
    _this.getProtectedResource(url, access_token, _performSecureRequestCallback(resolve, reject));
  });
};

nativeOAuth.prototype.getOAuthRequestTokenAsync = function(url, access_token) {
  var _this = this;
  return new Promise(function(resolve, reject){
    _this.getOAuthRequestToken(url, access_token, _performSecureRequestCallback(resolve, reject));
  });
};

Object
  .keys(nativeOAuth)
  .forEach((k) => {
    exports[k] = nativeOAuth[k];
  });
