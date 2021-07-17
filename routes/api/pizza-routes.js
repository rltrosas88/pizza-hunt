//18.1.7 step ONE create the API-specific route for pizza-routes
const router = require('express').Router();
//18.1.7 step TWO import functionality and hook it up with routes
const {
  getAllPizza,
  getPizzaById,
  createPizza,
  updatePizza,
  deletePizza
} = require('../../controllers/pizza-controller');

// Set up GET all and POST at /api/pizzas
//18.1.7 step THREE update the router.route('/')
// /api/pizzas
router
  .route('/')
  .get(getAllPizza)
  .post(createPizza);

// Set up GET one, PUT, and DELETE at /api/pizzas/:id
//18.1.7 step FOUR updat the router.route('/:id')
// /api/pizzas/:id
router
  .route('/:id')
  .get(getPizzaById)
  .put(updatePizza)
  .delete(deletePizza);

module.exports = router;