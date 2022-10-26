const Joi = require('joi');

const emailSchema = Joi.string().email().required();
const passSchema = Joi.string().required();

const validateEmail = Joi.object({
  email: emailSchema,
  password: passSchema,
});

module.exports = {
  validateEmail,
};