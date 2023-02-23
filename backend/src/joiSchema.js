const Joi = require("joi");

const schemaForm = Joi.object({
  name: Joi.string().required(),
  surname: Joi.string().required(),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
  textMail: Joi.string().required(),
});

module.exports = {
  schemaForm,
};
