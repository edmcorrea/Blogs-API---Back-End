const Joi = require('joi');

const nameSchema = Joi.string().min(8).required();
const emailSchema = Joi.string().email().required();
const passSchema = Joi.string().min(6).required();
const imageSchema = Joi.string();

const schemaLogin = Joi.object({
  email: emailSchema,
  password: passSchema,
});

const schemaNewUser = Joi.object({
  displayName: nameSchema,
  email: emailSchema,
  password: passSchema,
  image: imageSchema,
});

module.exports = {
  schemaLogin,
  schemaNewUser,
};