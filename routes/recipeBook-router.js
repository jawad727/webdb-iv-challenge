const router = require('express').Router();

const recipesDB = require('../helpers/recipeBook-helper')





router.get('/', (req,res) => {
    recipesDB
        .getDishes()
        .then(recipe => {
            res.status(200).json(recipe)
        })
        .catch(error => {
            res.status(400).json({
                error: "couldnt get dishes"
            })
        })
})


router.get('/:id', (req,res) => {
        const id = req.params.id

    recipesDB

        .getDish(id)
        .then(recipe => {
            res.status(200).json(recipe)
        })
        .catch(error => {
            res.status(400).json({
                error: "couldnt get by id"
            })
        })
})


router.post('/', (req, res) => {
    const dishbod = req.body;

    recipesDB
    .addDish(dishbod)

    .then(dish => {
        res.status(201).json(dishbod)
    })
    .catch(error => {
        res.status(400).json({
            error: "couldnt post"
        })
    })
})



router.get('/dish', (req,res) => {
    recipesDB
        .getRecipes()
        .then(recipe => {
            res.status(200).json(recipe)
        })
        .catch(error => {
            res.status(400).json({
                error: "couldnt get dishes"
            })
        })
})


router.post('/dish', (req, res) => {
    const dishbod = req.body;

    recipesDB
    .addRecipe(dishbod)

    .then(dish => {
        res.status(201).json(dishbod)
    })
    .catch(error => {
        res.status(400).json({
            error: "couldnt post"
        })
    })
})




module.exports = router;









