var Promise = require("bluebird");
var callbacks = require("./callbacks.js");
var nativeOAuth = require("./native-oauth.js");

var OAuthPrototype = nativeOAuth.OAuth.prototype;
var _getOAuthTokenCallback = callbacks._getOAuthTokenCallback;
var _performSecureRequestCallback = callbacks._performSecureRequestCallback;

OAuthPrototype.getOAuthAccessTokenAsnyc = function(oauth_token, oauth_token_secret, oauth_verifier) {
  var _this = this;

  return new Promise(function(resolve, reject){
    _this.getOAuthAccessToken.call(_this, oauth_token, oauth_token_secret, oauth_verifier, _getOAuthTokenCallback(resolve, reject));
  });
};

OAuthPrototype.getProtectedResourceAsync = function(url, method, oauth_token, oauth_token_secret) {
  var _this = this;

  console.warn("getProtectedResource and getProtectedResourceAsync is deprecated.");

  return new Promise(function(resolve, reject){
    _this.getProtectedResource.call(_this, url, method, oauth_token, oauth_token_secret, _performSecureRequestCallback(resolve, reject));
  });
};

OAuthPrototype.deleteAsync = function(url, oauth_token, oauth_token_secret) {
  var _this = this;

  return new Promise(function(resolve, reject){
    _this.delete.call(_this, url, oauth_token, oauth_token_secret, _performSecureRequestCallback(resolve, reject));
  });
};

OAuthPrototype.putAsync = function(url, oauth_token, oauth_token_secret, post_body, post_content_type) {
  var _this = this;

  return new Promise(function(resolve, reject){
    _this.put.call(_this, url, oauth_token, oauth_token_secret, post_body, post_content_type, _performSecureRequestCallback(resolve, reject));
  });
};

OAuthPrototype.postAsync = function(url, oauth_token, oauth_token_secret, post_body, post_content_type) {
  var _this = this;

  return new Promise(function(resolve, reject){
    _this.post.call(_this, url, oauth_token, oauth_token_secret, post_body, post_content_type, _performSecureRequestCallback(resolve, reject));
  });
};

OAuthPrototype.getOAuthRequestTokenAsync = function(extraParams) {
  var _this = this;

  if(!extraParams) extraParams = {};

  return new Promise(function(resolve, reject){
    _this.getOAuthRequestToken.call(_this, extraParams, _getOAuthTokenCallback(resolve, reject));
  });
};

module.exports = nativeOAuth;
