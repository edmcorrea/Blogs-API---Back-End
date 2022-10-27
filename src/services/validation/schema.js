const Joi = require('joi');

const nameSchema = Joi.string().min(8).required();
const emailSchema = Joi.string().email().required();
const passSchema = Joi.string().min(6).required();
const imageSchema = Joi.string();

const nameCatSchema = Joi.string().required();

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

const schemaCategory = Joi.object({
  name: nameCatSchema,
});

module.exports = {
  schemaLogin,
  schemaNewUser,
  schemaCategory,
};