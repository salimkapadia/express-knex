var baseModel = require('bookshelf').dbh;
var moment = require('moment');
var User;
  User = baseModel.Model.extend({
      tableName: 'user',
      hasTimestamps: ['created_at', 'updated_at'],
      defaults : function(){
          return {
              // default values for when the record is created.
              status: 'active',
              group_id : 0, //@TODO: come up with various groups levels for users (standard, paid, admin, multiple roles?)
              social_login_type: 'email'
           }
      },
      getId : function(){
        return this.get('id');
      },
      getEmail : function(){
        return this.get('email');
      },
      getNetwork : function(){
        return this.get('social_login_type');
      },
      setNetwork: function(network){
        return this.set('social_login_type', network);
      },
      getStatus : function(){
        return this.get('status');
      },
      isActive: function(){
        return this.get('status') == 'active'
      },
      setStatusAsPending : function(){
          return this.set('status', 'pending');
      },
      setStatusAsActive : function(){
        return this.set('status', 'active');
      },
      setStatusAsDeleted : function(){
          return this.set('status', 'deleted');
      },
      setStatusAsSuspended : function (){
          return this.set('status', 'suspended');
      },
      setStatusAsDisabled : function (){
          return this.set('status', 'disabled');
      },
      profile : function(){
          return this.hasOne('Profile');
      },
      photos : function(){
          return this.hasMany('Photos', 'user_id');
      },
      setPassword : async function(value){
        let hashed = value;
        return this.set('password', hashed);
      },
      setPasswordExpire: function(expireTime){
        this.set('token_expire', expireTime);
      },
      getUsername: function(){ return this.get('username'); },
      setUsername: function(username){
        return this.set('username', username.toLowerCase());
      },
      getEmail: function(){ return this.get('email').toLowerCase(); },
      setEmail: function(email){
        return this.set('email', email.toLowerCase());
      },
      getToken: function(){ return this.get('token'); },
      setToken: function(token){
        return this.set('token', token);
      },
      clearTokenAndExpire: function(){
        this.set('token', null);
        this.set('token_expire', null);
      },
      toJson: function(options){
          var attrs = baseModel.Model.prototype.toJSON.call(this, options);

          // remove password hash for security reasons
          delete attrs.password;

          return attrs;
      }
  },{
      /**
      * This function confirms the uniqueness of a username.
      * @param {string} userName the username we are searching for
      */
      isUsernameUnique: async function(userName){
          if (!userName){
            return new Error('user.notprovided');
          }
          let userModel = await this.findOne({username: userName.toLowerCase()});
          if(userModel){
            return new Error('user.exists');
          }
          return true;
      },
      // Finds the user by username
      /**
      * ## findByUsername
      * @param {string} username
      * @param {object} options
      */
      findByUsername: async function (username, options) {
        if ( username === undefined || !username){
          return new Error('user.notprovided');
        }
        return await this.findOne({username:username.toLowerCase()});
      },
      // Finds the user by email
      /**
      * ## findByEmail
      * @param {string} emailAddress
      * @param {object} options
      */
      findByEmail: async function (emailAddress, options) {
        if ( emailAddress === undefined || !emailAddress){
          return new Error('user.notprovided');
        }
        return await this.findOne({email:emailAddress.toLowerCase()});
      },
      findByNonExpiredToken: async function (token, options) {
        var expireTime =  moment().format("YYYY-MM-DD HH:mm:ss");
        return await this.query(function (qb){
          qb.where('token', '=', token).andWhere('token_expire', '>=', expireTime);
        }).fetch();
      }
  });

module.exports = User;
