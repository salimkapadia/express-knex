exports.up = function(knex, Promise) {
  return knex.schema.table('photo', function(t){
    t.dropColumn('updated_at');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('photo', function(t){
    t.dateTime('updated_at').notNullable().defaultTo(knex.fn.now());
  })
};
