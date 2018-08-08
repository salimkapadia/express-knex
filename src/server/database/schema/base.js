var Schema = {
        country: {
          comment: 'Lookup for all countries',
          columns: {
            id: {type: 'increments', nullable: false, primary: true},
            code_3: {type: 'varchar', maxlength: 3, nullable: false, unique: true, comment: 'ISO 3166-1 alpha-3 three-letter code'},
            code_2: {type: 'varchar', maxlength: 2, nullable: false, unique: true, comment: 'ISO 3166-1 alpha-2 three-letter code'},
            name: {type: 'string', maxlength: 100, nullable: false,  unique: true, comment: 'country name in English'},
          }
        },
        state: {
          comment: 'List of states for each country',
          columns: {
            id: {type: 'increments', nullable: false, primary: true},
            country_id: {type: 'integer', nullable: false, unsigned: true, references: 'country.id'},
            name: {type: 'string', maxlength: 100, nullable: true}
          }
        },
        exercise: {
          comment: 'Lookup for various exercise types',
          columns: {
            id: {type: 'increments', nullable: false, primary: true},
            description: {type: 'string', maxlength: 45, nullable: false},
          }
        },
        bodytype: {
          comment: 'Lookup for various body types',
          columns: {
            id: {type: 'increments', nullable: false, primary: true},
            description: {type: 'string', maxlength: 45, nullable: false},
          }
        },
        career: {
          comment: 'Lookup for various career types',
          columns: {
            id: {type: 'increments', nullable: false, primary: true},
            description: {type: 'string', maxlength: 45, nullable: false},
          }
        },
        diet: {
          comment: 'Look up for various types of diets',
          columns: {
            id: {type: 'increments', nullable: false, primary: true},
            description: {type: 'string', maxlength: 45, nullable: false},
          }
        },
        smoke: {
          comment: 'Look up for various types of smoking habits',
          columns: {
            id: {type: 'increments', nullable: false, primary: true},
            description: {type: 'string', maxlength: 45, nullable: false},
          }
        },
        drug: {
          comment: 'Look up for various types of drug habits',
          columns: {
            id: {type: 'increments', nullable: false, primary: true},
            description: {type: 'string', maxlength: 45, nullable: false},
          }
        },
        alcohol: {
          comment: 'Look up for various types of drinking habits',
          columns: {
            id: {type: 'increments', nullable: false, primary: true},
            description: {type: 'string', maxlength: 45, nullable: false},
          }
        },
        education: {
          comment: 'Look up for various types of completed education degrees',
          columns: {
            id: {type: 'increments', nullable: false, primary: true},
            description: {type: 'string', maxlength: 45, nullable: false},
          }
        },
        language: {
          comment: 'Look up for various types of languages.',
          columns: {
            id: {type: 'increments', nullable: false, primary: true},
            description: {type: 'string', maxlength: 45, nullable: false},
          }
        },
        personality: {
          comment: 'Look up for various types of personalities',
          columns: {
            id: {type: 'increments', nullable: false, primary: true},
            description: {type: 'string', maxlength: 45, nullable: false},
          }
        },
        authattempt: {
          comment: 'Each failed attempt will be logged',
          columns: {
            id: {type: 'increments', nullable: false, primary: true},
            email: {type: 'string', maxlength: 60, nullable: true},
            ip: {type: 'text', maxlength: 20, nullable: false},
            created_at: {type: 'dateTime', nullable: false},
          }
        },
        user: {
          comment: 'Will contain all users on system',
          columns: {
            id: {type: 'increments', nullable: false, primary: true},
            username: {type: 'string', maxlength: 40, nullable: false, unique: true, defaultTo: ''},
            email: {type: 'string', maxlength: 60, nullable: true, unique: true},
            password: {type: 'text', maxlength: 60, nullable: true},
            group_id: {type: 'integer', maxlength: 2, fieldtype: 'smallint', nullable: false, defaultTo: 0},
            token: {type: 'string', maxlength: 40, nullable: true},
            token_expire: {type: 'dateTime', nullable: true},
            social_login_type: {type: 'string', maxlength: 10, nullable: false},
            social_login_id: {type: 'string', maxlength: 100, nullable: true},
            social_login_token: {type: 'text', nullable: true},
            status: {type: 'string', maxlength: 10, nullable: false, defaultTo: 'pending'}, //pending,active,deleted
            created_at: {type: 'dateTime', nullable: false},
            updated_at: {type: 'dateTime', nullable: false},
          }
        },
        user_language: {
          comment: 'This is the Many2Many for user and language',
          columns: {
            id: {type: 'increments', nullable: false, primary: true},
            user_id: {type: 'integer', nullable: false, unsigned: true, references: 'user.id'},
            language_id: {type: 'integer', nullable: true, unsigned: true, references: 'language.id'},
            created_at: {type: 'dateTime', nullable: false}
          },
          index: {
            unique: ['user_id', 'language_id']
          }
        },
        user_personality: {
          comment: 'This is the Many2Many for user and personality',
          columns: {
            id: {type: 'increments', nullable: false, primary: true},
            user_id: {type: 'integer', nullable: false, unsigned: true, references: 'user.id'},
            personality_id: {type: 'integer', nullable: true, unsigned: true, references: 'personality.id'},
            created_at: {type: 'dateTime', nullable: false}
          },
          index: {
            unique: ['user_id', 'personality_id']
          }
        },
        photo: {
          comment: 'This will contain all user photos',
          columns: {
            id: {type: 'increments', nullable: false, primary: true},
            user_id: {type: 'integer', nullable: false, unsigned: true, references: 'user.id'},
            is_primary: {type: 'integer', maxlength: 1, fieldtype: 'tinyint', nullable: false, defaultTo: 0},
            filepath: {type: 'string', maxlength: 256, nullable: false, defaultTo: ''},
            created_at: {type: 'dateTime', nullable: false},
            updated_at: {type: 'dateTime', nullable: false}
          }
        },
        profile: {
          comment: 'This will be the user profiles',
          columns: {
            id: {type: 'increments', nullable: false, primary: true},
            user_id: {type: 'integer', nullable: true, unsigned: true, references: 'user.id', unique: true},
            state_id: {type: 'integer', nullable: true, unsigned: true, references: 'state.id'},
            exercise_id: {type: 'integer', nullable: true, unsigned: true, references: 'exercise.id'},
            bodytype_id: {type: 'integer', nullable: true, unsigned: true, references: 'bodytype.id'},
            career_id: {type: 'integer', nullable: true, unsigned: true, references: 'career.id'},
            diet_id: {type: 'integer', nullable: true, unsigned: true, references: 'diet.id'},
            smoke_id: {type: 'integer', nullable: true, unsigned: true, references: 'smoke.id'},
            drug_id: {type: 'integer', nullable: true, unsigned: true, references: 'drug.id'},
            alcohol_id: {type: 'integer', nullable: true, unsigned: true, references: 'alcohol.id'},
            education_id: {type: 'integer', nullable: true, unsigned: true, references: 'education.id'},
            gender: {type: 'string', maxlength: 1, nullable: true},
            birthday: {type: 'dateTime', nullable: true},
            created_at: {type: 'dateTime', nullable: false},
            updated_at: {type: 'dateTime', nullable: true},
          }
        }
    };
module.exports = Schema;
