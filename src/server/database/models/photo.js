var baseModel = require('bookshelf').dbh;
var Photo;

Photo = baseModel.Model.extend({
    tableName: 'photo',
    hasTimestamps: ['created_at'],
    removeOutputAttributes: ['user_id'],
    defaults: function() {
        return {
            // default values for when the record is created.
            is_primary: 0,
        }
    },
    setAsPrimary: function(){
      return this.set('is_primary', 1);
    },
    getFilePath: function(){
      return this.get('filepath');
    },
    getThumbFilePath: function(){
      var index = this.getFilePath().lastIndexOf('.');
      return this.getFilePath().substring(0,index) + '-thumb' + '.jpg';
    },
    getLargeFilePath: function(){
      var index = this.getFilePath().lastIndexOf('.');
      return this.getFilePath().substring(0,index) + '-large' + '.jpg';
    },
    setFilePath: function(filepath){
      this.set('filepath', filepath);
    },
    isPrimary : function(){
      return 1 == this.get('is_primary');
    },
    // Relations
    user: function () {
        return this.belongsTo('User', 'user_id');
    }
},{
  /**
   * [unsetOldPrimaryPhoto This function makes any exisiting primary photo to not primary for a given user]
   */
  unsetOldPrimaryPhoto: async function(userid){
    return await baseModel.knex(this.prototype.tableName).where({user_id:userid}).update({is_primary:0});
  },
  findByUserIdPhotoId : async function (userid, photoid, options) {
      return await this.findOne({
        id: photoid,
        user_id:userid,
      });
  },
});

module.exports = Photo;
