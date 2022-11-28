/* eslint-disable class-methods-use-this */
const Joi = require("joi");
const AbstractManager = require("./AbstractManager");

const payments = ["1x", "3x", "12x"];

// eslint-disable-next-line no-unused-vars
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
      // Allowing .com .net and .fr
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
    return this.connection.query(
      `SELECT id, lastname, firstname, email, paymentMethod, checkboxStatus, archived, date FROM ${this.table}`
    );
  }

  find(id) {
    return this.connection.query(`SELECT * FROM ${this.table} WHERE id = ?`, [
      id,
    ]);
  }

  update(preorder) {
    return this.connection.query(
      `UPDATE ${this.table} SET checkboxStatus = ? WHERE id = ? `,
      [preorder.checkboxStatus, preorder.id]
    );
  }

  archived(preorder) {
    return this.connection.query(
      `UPDATE ${this.table} SET archived = ? WHERE id = ? `,
      [preorder.archived, preorder.id]
    );
  }

  delete(id) {
    return this.connection.query(`delete from ${this.table} where id = ?`, [
      id,
    ]);
  }

  async validPreorderToCreate(preorder, creation = true) {
    try {
      if (creation) {
        await schemaForCreation.validateAsync(preorder);
      }
      return true;
    } catch (err) {
      return false;
    }
  }
}

module.exports = PreOrderManager;
