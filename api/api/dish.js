let dishes = require('../models/dish.model');
const schema = require('../models/validatorSchema');
const validationBody = require('../models/validators').validationBody;

exports.getDishes = function(req, res) {
  dishes
    .getDishes()
    .then(result => {
      result.map(dish => {
        if (dish.images != undefined) {
          if (!dish.images.match(/^http/)) {
            dish.images = `${req.protocol}://${req.get('host')}/images/${
              dish.images
            }`;
          }
        }
      });

      res.status(200).send(result);
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

exports.addNewDish = (req, res) => {
  const validationStatus = validationBody.validate(
    req.body,
    schema.dishSchema,
    res
  );
  if (validationStatus) {
    const result = dishes.addNewDish(req.body);

    if (result) res.status(400).json('Error');

    return res.status(200).json(result);
  }
};

exports.deleteDish = (req, res) => {
  dishes.deleteDish(req.params.id);
};
