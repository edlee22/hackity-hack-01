//

const mongoose = require("../mongoose");

// pizza schema
const pizzaSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  toppings: {
    type: [String],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  }
});

// create model from schema
const Pizzas = mongoose.model("Pizza", pizzaSchema);

// export model
module.exports = Pizzas;
