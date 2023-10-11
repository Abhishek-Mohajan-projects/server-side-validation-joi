const Joi = require("joi");

exports.schemas = {
  registerSchema: Joi.object({
    name: Joi.string().min(3).max(10).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(20).required(),
  }),
  loginSchema: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(20).required(),
  }),
};
