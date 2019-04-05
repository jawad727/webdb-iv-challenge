
exports.seed = function(knex, Promise) {
  return knex('dish').insert([
    {dish_name: 'pizza'},
    {dish_name: 'taco'},
    {dish_name: 'burrito'}
    ]);


};
