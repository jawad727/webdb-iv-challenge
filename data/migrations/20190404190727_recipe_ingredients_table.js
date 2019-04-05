
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipe-ingredients', tbl => {
        tbl.increments()

        tbl
        .integer('recipe_id')
        .unsigned()
        .references('id')
        .inTable('recipe')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

        tbl
        .integer('ingredients_id')
        .unsigned()
        .references('id')
        .inTable('ingredients')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

        tbl
        .integer('ingredients_quantity')
        .unsigned()

    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipe-ingredients')
};
