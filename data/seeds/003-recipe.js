
exports.seed = function(knex, Promise) {
  return knex('recipe').insert([
    {recipe_name: 'pizza'},
    {recipe_name: 'taco'},
    {recipe_name: 'burrito'}
    ]);


};