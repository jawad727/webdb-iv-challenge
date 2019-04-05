const knex = require('knex')

const knexConfig = {
    client: 'sqlite3',
    connection: {
        filename: './data/recipeBook.sqlite3'
    },
    useNullAsDefault: true
};

const db = knex(knexConfig);

module.exports = {
    getDishes,
    getDish,
    addDish,
    getRecipes,
    addRecipe,
    getRecipe
};

function getDishes() {
    return db('dish');
}


function getDish(id) {
    return db('dish')
      .where({ id })
      .first();
  }

function addDish(dish) {
    return db('dish')
    .insert(dish)
    .then(ids => {
      return getDish(ids[0]);
    });
}



function getRecipes() {
    return db('recipe');
}

function getRecipe(id) {
    return db('recipe')
      .where({ id })
      .first();
  }


  function addRecipe(recipe) {
    return db('recipe')
    .insert(recipe)
    .then(ids => {
      return getRecipe(ids[0]);
    });
}



// function getRecipes() {
//     return db('recipes as r')
//       .join('dishes as d', 'd.id', 'r.dish_id')
//       .select('r.id', 'r.recipe_name', 'd.dish_name')
//     //   .where('r.dish_id', dish_id);
//   }
  