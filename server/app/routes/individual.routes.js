module.exports = app => {
  const members = require('../controllers/individual.controller');

  var router = require('express').Router();

  // Create a new Tutorial
  router.post("/", members.create);

  // Retrieve all Tutorials
  router.get("/", members.findAll);

  // Retrieve all published Tutorials
  router.get("/published", members.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", members.findOne);

  // Update a Tutorial with id
  router.put("/:id", members.update);

  // Delete a Tutorial with id
  router.delete("/:id", members.delete);

  // Create a new Tutorial
  router.delete("/", members.deleteAll);

  app.use('/api/members', router);
}