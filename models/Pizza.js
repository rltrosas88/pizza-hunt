//18.1.5 step ONE import the dpendencies
const { Schema, model } = require('mongoose');

//18.1.5 step TWO add the schema using the Schema constructor imported from Mongoose and 
    //define the fields with specific data types
const PizzaSchema = new Schema({
    //The name of the pizza
    pizzaName: {
      type: String
    },
    //the name of the user that created the pizza
    createdBy: {
      type: String
    },
    //a timestamp of when the pizza was created
    //a timestamp of any updates to pizza's data
    createdAt: {
      type: Date,
      //if no value i provided in the timestamp field when the user creates new data,
        //the Date.now function will be executed and
        //will provide a timestamp
      default: Date.now
    },
    //the pizza's suggested size
    size: {
      type: String,
      default: 'Large'
    },
    //the pizza's toppings
    //the empty brackets [] indicate an array as the data type
        //colld specify Array in place of the brackets
    toppings: []
  });
//18.1.5 step THREE create the Pizza model using the PizzaSchema
const Pizza = model('Pizza', PizzaSchema);

//18.1.5 step FOUR export the Pizza model
module.exports = Pizza;
