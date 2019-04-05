
exports.seed = function(knex, Promise) {
  return knex('instructions').insert([
    {steps: 1, description: 'lorem ipsum'},
    {steps: 2, description: 'lorem ipsum'},
    {steps: 3, description: 'lorem ipsum'}
    ]);


};