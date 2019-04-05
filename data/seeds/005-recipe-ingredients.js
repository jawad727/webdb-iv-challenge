
exports.seed = function(knex, Promise) {
  return knex('recipe-ingredients').insert([
    {ingredients_quantity: 5},
    {ingredients_quantity: 4},
    {ingredients_quantity: 10}
    ]);


};