
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dish', tbl => {
      tbl.increments()
      tbl.string('dish_name', 128).notNullable()
      
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dish')
};
