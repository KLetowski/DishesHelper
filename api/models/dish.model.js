const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dishSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  ingredients: {
    type: Array,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  preparing: {
    type: String,
    required: false
  },
  images: {
    type: String,
    required: false
  }
});

dishSchema.set('toObject', {
  virtuals: true
});

const Dishes = mongoose.model('dish', dishSchema);

module.exports.collection = Dishes;

module.exports.getDishes = page =>
  Dishes.find({}, function(err, result) {
    if (err) throw err;
    console.log(result);
    return result;
  })
    .skip((page - 1) * 10)
    .limit(10);

module.exports.addNewDish = dish => {
  var Dish = new Dishes(dish);
  Dishes.create(dish, function(error) {
    if (error) return false;
    return Dish;
  });
};

module.exports.deleteDish = dishId => {
  Dishes.findOneAndDelete({ _id: dishId }, result => {});
};
