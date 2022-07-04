/* eslint-disable class-methods-use-this */
const Joi = require("joi");
const AbstractManager = require("./AbstractManager");

const pics = ["carousel", "home", "methode", "produit", "propos", "contact"];

const picturesSchema = Joi.object({
  file: Joi.string().max(255),
  alt: Joi.string().max(255).required(),
  pictogram: Joi.string().max(255),
  categories: Joi.string().valid(...pics),
  picSection: Joi.number(),
});

class PictureManager extends AbstractManager {
  static table = "pictures";

  find(id) {
    return this.connection.query(
      `select file, alt, pictogram, categories, picSection from  ${this.table} where id = ? `,
      [id]
    );
  }

  findBySection(id) {
    return this.connection.query(
      `select file, alt, pictogram, categories, picSection from  ${this.table} where picSection = ? `,
      [id]
    );
  }

  findAll() {
    return this.connection.query(
      `SELECT id, file, alt, pictogram, categories, picSection FROM  ${this.table}`
    );
  }

  findAllWithFilter(filter) {
    return this.connection.query(
      `SELECT id, file, alt, pictogram, categories, picSection FROM ${this.table} WHERE categories=? OR picSection= ?`,
      [filter.categories, filter.picSection]
    );
  }

  get(pictures) {
    return this.connection.query(
      `SELECT file, alt, pictogram, categories, picSection FROM ${this.table} `,
      [
        pictures.file,
        pictures.alt,
        pictures.pictogram,
        pictures.categories,
        pictures.picSection,
      ]
    );
  }

  insert(pictures) {
    return this.connection.query(
      `INSERT INTO ${PictureManager.table} (file, alt, pictogram, categories, picSection) values (?, ?, ?, ?, ?)`,
      [
        pictures.file,
        pictures.alt,
        pictures.pictogram,
        pictures.categories,
        pictures.picSection,
      ]
    );
  }

  update(pictures) {
    return this.connection.query(
      `UPDATE ${this.table} SET file = ?, alt = ?, categories = ?, picSection = ? WHERE id = ?`,
      [
        pictures.file,
        pictures.alt,
        pictures.categories,
        pictures.picSection,
        pictures.id,
      ]
    );
  }

  async validPicturesToCreate(pictures) {
    try {
      await picturesSchema.validateAsync(pictures);
      return true;
    } catch (err) {
      return false;
    }
  }
}

module.exports = PictureManager;
