const routes = require('../constants/routes');

module.exports = function(app) {
  const dish = require('./dish');

  app.route(routes.getDishes).get(dish.getDishes);
  app.route(routes.addNewDish).post(dish.addNewDish);
  app.route(routes.deleteDish).get(dish.deleteDish);
};
