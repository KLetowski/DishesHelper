const Joi = require('joi');

const validationBody = {
  validate(body, schema, res) {
    const form = Joi.validate(body, schema);
    if (form.error) {
      form.error.details.reduce((validation, { path, message }) => {
        validation[path.join('.')] = message;
        res.status(400).json(validation);
      }, {});

      return false;
    }

    return true;
  }
};

module.exports = {
  validationBody: validationBody
};
