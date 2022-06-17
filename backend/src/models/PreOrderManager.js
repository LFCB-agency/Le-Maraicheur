const AbstractManager = require("./AbstractManager");
const Joi = require("joi");

const payments = ["1x", "3x", "12x"];

const schemaForCreation = Joi.object({
  lastname: Joi.string()
    .pattern(/^[a-z ,.'-]+$/i)
    .required(),
  firstname: Joi.string()
    .pattern(/^[a-z ,.'-]+$/i)
    .required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      //   tlds: { allow: ["com", "net", "fr", "gmail"] },
      //Allowing .com .net and .fr
    })
    .required(),
  paymentMethod: Joi.string().valid(...payments),
});

class PreOrderManager extends AbstractManager {
  static table = "preorder";

  insert(preorder) {
    return this.connection.query(
      `insert into ${PreOrderManager.table} (lastname, firstname, email, paymentMethod, date) VALUES (?, ?, ?, ?, ?)`,
      [
        preorder.lastname,
        preorder.firstname,
        preorder.email,
        preorder.paymentMethod,
        preorder.date,
      ]
    );
  }

  findAll() {
    return this.connection.query(`SELECT * FROM ${this.table}`);
  }

  find(id) {
    return this.connection.query(`SELECT * FROM ${this.table} WHERE id = ?`, [
      id,
    ]);
  }
}

module.exports = PreOrderManager;
