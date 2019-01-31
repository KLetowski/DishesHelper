const Joi = require('joi');

module.exports.dishSchema = Joi.object()
  .options({ abortEarly: false })
  .keys({
    name: Joi.string()
      .min(5)
      .required(),
    description: Joi.string(),
    preparing: Joi.string(),
    ingredients: Joi.array()
      .min(1)
      .required()
  });
