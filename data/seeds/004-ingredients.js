
exports.seed = function(knex, Promise) {
  return knex('ingredients').insert([
    {ingredient_name: 'cheese'},
    {ingredient_name: 'sauce'},
    {ingredient_name: 'bread'}
    ]);


};