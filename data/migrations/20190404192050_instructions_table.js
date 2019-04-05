
exports.up = function(knex, Promise) {
    return knex.schema.createTable('instructions', tbl => {
        tbl.increments()

        tbl
        .integer('steps')
        .unsigned()

        tbl.string('description', 128).notNullable()

        tbl
        .integer('recipe_id')
        .unsigned()
        .references('id')
        .inTable('recipe')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
        
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('instructions')
};
