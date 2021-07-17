//18.1.6 step ONE
const { Pizza } = require('../models');

const pizzaController = {
  //18.1.6 step TWO create the first two methods
    // get all pizzas
    getAllPizza(req, res) {
      Pizza.find({})
        .then(dbPizzaData => res.json(dbPizzaData))
        .catch(err => {
          console.log(err);
          res.sendStatus(400);
        });
    },
    
      // get one pizza by id
      getPizzaById({ params }, res) {
        Pizza.findOne({ _id: params.id })
          .then(dbPizzaData => res.json(dbPizzaData))
          .catch(err => {
            console.log(err);
            res.sendStatus(400);
          });
      },

    //18.1.6 step THREE create the method for handling POST /api/pizzas
    // createPizza
    createPizza({ body }, res) {
      Pizza.create(body)
        .then(dbPizzaData => res.json(dbPizzaData))
        .catch(err => res.json(err));
    },

    //18.1.6 step FOUR creat the method for when requesting to PUT /api/pizzas/:id
    // update pizza by id
    updatePizza({ params, body }, res) {
      //with .findOneAndUpdate method, mongoose finds a single document we want to update,
            //then updates it and returns the updated document
      Pizza.findOneAndUpdate({ _id: params.id }, body, { new: true })
        .then(dbPizzaData => {
          if (!dbPizzaData) {
            res.status(404).json({ message: 'No pizza found with this id!' });
              return;
            }
            res.json(dbPizzaData);
          })
        .catch(err => res.status(400).json(err));
    },

    //18.1.6 step FIVE create the method to delet a pizza from the database
    // delete pizza
    deletePizza({ params }, res) {
      Pizza.findOneAndDelete({ _id: params.id })
        .then(dbPizzaData => {
          if (!dbPizzaData) {
            res.status(404).json({ message: 'No pizza found with this id!' });
            return;
          }
          res.json(dbPizzaData);
        })
        .catch(err => res.status(400).json(err));
    }
  };

  module.exports = pizzaController;
