var _ = require('lodash');
var moment = require('moment');
var baseModel = require('bookshelf').dbh;
var Profile;

	Profile = baseModel.Model.extend({
		tableName: 'profile',
		hasTimestamps: ['created_at', 'updated_at'],
		idAttribute: 'user_id',

		user: function(){
			return this.hasOne('User', 'id', 'user_id');
		},
		state: function (){
			return this.hasOne('State', 'id', 'state_id');
		},
		photos : function(){
				return this.hasMany('Photo', 'user_id');
		},
		languages : function (){
			return this.belongsToMany('Language', 'user_language', 'user_id', 'language_id');
		},
		personalities : function (){
			return this.belongsToMany('Personality', 'user_personality', 'user_id', 'personality_id');
		},
		removeLanguages : async function(values){
			var data = [];
			var self = this;

			//prepare the personalities to be added.
			_.each(values, function(value) {
				data.push({ user_id: self.get('user_id'), language_id: value });
			});

			//now detach the old languages
			return await this.languages().detach(data);
		},
		removePersonalities : async function(values){
			var data = [];
			var self = this;

			//prepare the personalities to be added.
			_.each(values, function(value) {
				data.push({ user_id: self.get('user_id'), personality_id: value });
			});

			//now detach the old pesonalities
			return await this.personalities().detach(data);
		},
		setLanguages : async function(values){
			var data = [];
			var uniqueValues = [];
			var self = this;

			if (values == 0 || values === undefined || values.length == 0){
				return;
			}

			// compare the request with current language ids and return only unique ids
			uniqueValues = _.difference(values,this.related('languages').pluck('id'));

			//prepare the languages to be added.
			_.each(uniqueValues, function(value) {
				data.push({ user_id: self.get('user_id'), language_id: value });
			});

			//now attach the new languages
			return await this.languages().attach(data);
		},
		setPersonalities : async function(values){
			var data = [];
			var uniqueValues = [];
			var self = this;

			if (values == 0 || values === undefined || values.length == 0){
				return;
			}

			// compare the request with current language ids and return only unique ids
			uniqueValues = _.difference(values,this.related('personalities').pluck('id'));

			//prepare the personalities to be added.
			_.each(uniqueValues, function(value) {
				data.push({ user_id: self.get('user_id'), personality_id: value });
			});

			//now attach the new pesonalities
			return await this.personalities().attach(data);
		},
		setUserId: function(value){
			return this.set('user_id', value);
		},
		setFirstName : function(value){
			if (value == "" || value === undefined){
				return;
			}
			return this.set('fname', value);
		},
		setBodyType : function(value){
			if (value == 0 || value === undefined){
				return;
			}
			return this.set('bodytype_id', value);
		},
		setExercise : function(value){
			if (value == 0 || value === undefined){
				return;
			}
			return this.set('exercise_id', value);
		},
		setCareer : function(value){
			if (value == 0 || value === undefined){
				return;
			}
			return this.set('career_id', value);
		},
		setDiet : function(value){
			if (value == 0 || value === undefined){
				return;
			}
			return this.set('diet_id', value);
		},
		setSmoke : function(value){
			if (value == 0 || value === undefined){
				return;
			}
			return this.set('smoke_id', value);
		},
		setState : function(value){
			if (value == 0 || value === undefined){
				return;
			}
			return this.set('state_id', value);
		},
		setDrug : function(value){
			if (value == 0 || value === undefined){
				return;
			}
			return this.set('drug_id', value);
		},
		setAlcohol : function(value){
			if (value == 0 || value === undefined){
				return;
			}
			return this.set('alcohol_id', value);
		},
		setEducation : function(value){
			if (value == 0 || value === undefined){
				return;
			}
			return this.set('education_id', value);
		},
		setChildren : function(value){
			if (value == 0 || value === undefined){
				return;
			}
			return this.set('children_id', value);
		},
		setRelationship : function(value){
			if (value == 0 || value === undefined){
				return;
			}
			return this.set('relationshipstatus_id', value);
		},
		setHeight : function(value){
			if (value == 0 || value === undefined){
				return;
			}
			return this.set('height', value);
		},
		setGender : function(value){
			if (value == 0 || value === undefined){
				return true; //gender cannot be null.
			}
			return this.set('gender', value.toLowerCase());
		},
		setOrientation : function(value){
			if (value == 0 || value === undefined){
				return;
			}
			return this.set('orientation_id', value);
		},
		setBirthday : function(value){
			//NOTE: birthday can't be set to null because it's a datetime field
			//NOTE: which means it will default to something like 1970-01-01T00:00:00.000Z
			if (value == 0 || value === undefined){
				return;
			}
			return this.set('birthday', value);
		},
		setAgeMin : function(value){
			if (value == 0 || value === undefined){
				return;
			}
			return this.set('age_min', value);
		},
		setAgeMax : function(value){
			if (value == 0 || value === undefined){
				return;
			}
			return this.set('age_max', value);
		},
		toJSON: function (removeBirthday, options) {
			var attrs = baseModel.Model.prototype.toJSON.call(this, options);
			attrs.age = moment().diff(this.get('birthday'), 'years');
			if (removeBirthday) attrs.birthday = '';
			return attrs;
		}
	});

module.exports = Profile;
