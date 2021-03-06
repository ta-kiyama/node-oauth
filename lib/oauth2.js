var Promise = require("bluebird");
var callbacks = require("./callbacks.js");
var nativeOAuth = require("./native-oauth2.js");

var OAuthPrototype = nativeOAuth.OAuth2.prototype;
var _getOAuthTokenCallback = callbacks._getOAuthTokenCallback;
var _performSecureRequestCallback = callbacks._performSecureRequestCallback;

OAuthPrototype.getOAuthAccessTokenAsnyc = function(code, params) {
  var _this = this;

  return new Promise(function(resolve, reject){
    _this.getOAuthAccessToken.call(_this, code, params, _getOAuthTokenCallback(resolve, reject));
  });
};

OAuthPrototype.getProtectedResourceAsync = function(url, access_token) {
  var _this = this;

  console.warn("getProtectedResource and getProtectedResourceAsync is deprecated.");

  return new Promise(function(resolve, reject){
    _this.getProtectedResource.call(_this, url, access_token, _performSecureRequestCallback(resolve, reject));
  });
};


OAuthPrototype.getAsync = function(url, access_token) {
  var _this = this;

  return new Promise(function(resolve, reject){
    _this.get.call(_this, url, access_token, _performSecureRequestCallback(resolve, reject));
  });
};

OAuthPrototype.getOAuthRequestTokenAsync = function(url, access_token) {
  var _this = this;

  return new Promise(function(resolve, reject){
    _this.getOAuthRequestToken.call(_this, url, access_token, _performSecureRequestCallback(resolve, reject));
  });
};

module.exports = nativeOAuth;
