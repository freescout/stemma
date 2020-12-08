module.exports = app => {
  const individuals = require('../controllers/individual.controller');

  var router = require('express').Router();

  // Create a new Individual
  router.post("/", individuals.create);

  // Retrieve all Individuals
  router.get("/", individuals.findAll);

  // Retrieve all published Individuals
  router.get("/published", individuals.findAllPublished);

  // Retrieve a single Individual with id
  router.get("/:id", individuals.findOne);

  // Update a Individual with id
  router.put("/:id", individuals.update);

  // Delete a Individual with id
  router.delete("/:id", individuals.delete);

  // Delete a new Individual
  router.delete("/", individuals.deleteAll);

  app.use('/api/individuals', router);
}